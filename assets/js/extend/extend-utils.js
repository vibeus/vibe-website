var ExtendShopifyBuy = {
	getTerm: function(planDetails) {
		var planId = planDetails.planId;
		var planTerm = planId.split('-')[planId.split('-').length - 1]
		var textMatching = {
			"1y": "1 Year",
			"2y": "2 Years",
			"3y": "3 Years"
		}
		return textMatching[planTerm]
	},

	insertDecimal: function (num) {
		return (num / 100).toFixed(2);
	 },

	hardRefresh: function(openCart) {
		location.href = location.hash ? location.href.substring(0, location.href.indexOf('#')) : location.href;
		if(openCart){
			localStorage.setItem('ExtendOpenCart', "true")
		}
	},

	getCustomAttribute: function(customAttributes, attributeToFind) {
		if(!customAttributes) return false;
		var attribute = customAttributes.find(function(attribute) {
			return attribute.key === attributeToFind
		});
		return attribute ? attribute.value : null;
	},

	warrantyAlreadyInCheckout: function (variantId, cartItems) {
        var checkoutItems = Object.values(JSON.parse(cartItems))
		const extendWarranties = checkoutItems.filter(function(lineItem) {
            //filter through the customAttributes and grab the referenceId
			var customAttributes = lineItem.customAttributes;
			if(customAttributes && customAttributes.find)
            var referenceId = ExtendShopifyBuy.getCustomAttribute(customAttributes, "Ref");
			return (customAttributes && referenceId && referenceId.toString() === variantId);
		})
		return extendWarranties.length > 0;
	},

	isWarranty: function(item) {
		return item.customAttributes && (ExtendShopifyBuy.getCustomAttribute(item.customAttributes, 'Vendor') === 'Extend')
	},

	normalizeCheckout: function (checkout, balance, callback) {
		checkout = JSON.parse(checkout);

		var checkoutItems = [];
		for(id in checkout) {
			var quantity = checkout[id].quantity;
			var customAttributes = checkout[id].customAttributes || null
			var item = {
				id: id,
				quantity: quantity,
				customAttributes: customAttributes
			}
			checkoutItems.push(item)
		}

		const updates = ExtendShopifyBuy.getCartUpdates(checkoutItems, balance);
		if(updates) {
			for(id in updates) {
				checkout[id].quantity = updates[id];
			}
			callback(true, checkout);
		} else {
			callback(false)
		}
	},
	getCartUpdates: function(checkoutItems, balance) {
		var products = {}
		var updates = {}
		checkoutItems.forEach(item => {
			const productVariantId = ExtendShopifyBuy.isWarranty(item) ? ExtendShopifyBuy.getCustomAttribute(item.customAttributes, "Ref") : String(item.id)
			const product = products[productVariantId] || {
			  quantity: 0,
			  warrantyQuantity: 0,
			  warranties: [],
			}
		
			if (ExtendShopifyBuy.isWarranty(item)) {
			  product.warrantyQuantity += item.quantity
			  product.warranties.push(item)
			} else {
			  product.quantity += item.quantity
			  // If warranty product is coming from lead, set leadProductKey and leadQuantity on product object,
			  // so we can get them when iterating over products
			  if (item.customAttributes && ExtendShopifyBuy.getCustomAttribute(item.customAttributes, 'Extend.LeadQuantity')) {
				product.leadQuantity = Number(ExtendShopifyBuy.getCustomAttribute(item.customAttributes, 'Extend.LeadQuantity'))
				product.leadProductKey = item.id
			  }
			}
		
			products[productVariantId] = product
		
			// Remove Extend Items without Properties from Cart - Unattached Warranties
			if (ExtendShopifyBuy.getCustomAttribute(item.customAttributes, "Vendor") === 'Extend' && (!item.customAttributes || !ExtendShopifyBuy.getCustomAttribute(item.customAttributes, "Ref"))) {
			  updates[item.id] = 0
			}
		  })
		  Object.keys(products)
		  .map(key => products[key])
		  .forEach(product => {
			// If warranty product is coming from lead, and product quantity is higher than lead quantity
			// (e.g. user manually increased product quantity after coming in from lead), then reset product quantity to lead quantity.
			if (
			  product.leadQuantity &&
			  product.leadProductKey &&
			  product.quantity > product.leadQuantity
			) {
			  updates[product.leadProductKey] = product.leadQuantity
			  return
			}
	  
			// remove warranties without products
			if (product.warrantyQuantity && !product.quantity) {
			  product.warranties.forEach(warranty => {
				updates[warranty.id] = 0
			  })
			  return
			}
	  
			let quantityDiff = product.warrantyQuantity - product.quantity
	  
			// no updates quantity === warranty quantity
			if (quantityDiff === 0) {
			  return
			}

			function sortByPrice(w1, w2) {
				return w1.price - w2.price
			}
	  
			const warranties = product.warranties.sort(sortByPrice)
	  
			// not enough warranties
			if (quantityDiff < 0) {
			  // only add warranties if options.balance = true
			  if (balance && warranties.length) {
				const maxPriceWarranty = warranties[warranties.length - 1]
				updates[maxPriceWarranty.id] = maxPriceWarranty.quantity - quantityDiff
			  }
			  return
			}
	  
			// else, too many warranties
			warranties.forEach(warranty => {
			  if (quantityDiff === 0) return
			  // start removing quantities until we reach our target
			  const newQuantityDiff = Math.max(0, quantityDiff - warranty.quantity)
			  const removedQuantity = quantityDiff - newQuantityDiff
			  updates[warranty.id] = warranty.quantity - removedQuantity
			  quantityDiff = newQuantityDiff
			})
		  })
		  return Object.keys(updates).length ? updates : null
	}
}

window.ExtendShopifyBuy = ExtendShopifyBuy;