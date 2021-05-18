
var ExtendShopifyBuy = {
	//Decode Base64 Shopify Global ID
	decodeBase64Id: function (base64Id) {
		const variantIdDecoded = atob(base64Id).split('/');
		const variantId = variantIdDecoded[variantIdDecoded.length - 1];
		if(variantId.includes('?')) {
			return variantId.split('?')[0]
		}
		return variantId;
	}, 


	//Encode Base64 Shopify Global ID
	encodeBase64Id: function (variantId, type) {
		//if there's a type we will use that instead
		const gid = type ? `gid://shopify/${type}/${variantId}`  : 'gid://shopify/ProductVariant/' + variantId;
		const variantIdEncoded = btoa(gid);
		return variantIdEncoded;
	},
	
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

	//addWarrantyToCheckout -> adds warranty to checkout, checkout must be updated after adding
	addWarrantyToCheckout: function (productVariantId, checkoutId, planDetails, callback) {
		ExtendShopify.getPlanVariant(planDetails, function(err, planVariant) {
			if(planVariant){
				var variantId = planVariant.variantId;
				var encodedBase64Id = ExtendShopifyBuy.encodeBase64Id(variantId);
				window.client.checkout.fetch(checkoutId)
					.then(function(checkout) {
						var product = checkout.lineItems.find(function(lineItem) {
							return ExtendShopifyBuy.decodeBase64Id(lineItem.variant.id) === productVariantId;
						})
						if(!product) return;
						var referenceTitle = product.title;

						var term = ExtendShopifyBuy.getTerm(planDetails);

						var quantity = Number(planDetails.quantity) || 1;

						var lineItem = {variantId: encodedBase64Id, quantity: quantity, customAttributes: [{'key': 'Ref', 'value': productVariantId}, {'key': 'vendor', 'value': 'Extend'}, {'key': 'RefTitle', 'value': referenceTitle}, {'key': 'Term', 'value': term}]}
						var lineItemsToAdd = [lineItem]
						client.checkout.addLineItems(checkoutId, lineItemsToAdd)
							.then(function(res) {
							if(callback) {
								callback(res);
							}
							return res;
						})

					})


			}

		})
	},

	hardRefresh: function(openCart) {
		location.href = location.hash ? location.href.substring(0, location.href.indexOf('#')) : location.href;
		if(openCart){
			localStorage.setItem('ExtendOpenCart', "true")
		}
	},

	getCustomAttribute: function(lineItem, attributeToFind) {
		var attribute = lineItem.customAttributes.find(attribute => {
			return attribute.key === attributeToFind
		});
		return attribute ? attribute.value : null;
	},

	warrantyAlreadyInCheckout: function (variantId, checkoutItems) {
		const extendWarranties = checkoutItems.filter(function(lineItem) {
			//filter through the customAttributes and grab the referenceId;
			var referenceId = ExtendShopifyBuy.getCustomAttribute(lineItem, "Ref");
			return (lineItem.customAttributes && referenceId && referenceId.toString() === variantId);
		})
		return extendWarranties.length > 0;
	},

	normalizeCheckout: function (checkoutId, client, callback) {
		var Checkout = client.checkout;
		Checkout.fetch(checkoutId)
			.then((checkout) => {
				var checkoutItems = checkout.lineItems;
				//initial updates state
				var newState = {
					updates: false,
					products: {},
					warranties: checkoutItems.filter(function(lineItem) {return ExtendShopifyBuy.getCustomAttribute(lineItem, "vendor") === "Extend"})
				}
				checkoutItems.forEach(function(lineItem){
					const productVariantId = ExtendShopifyBuy.getCustomAttribute(lineItem, "vendor") === "Extend" ? ExtendShopifyBuy.getCustomAttribute(lineItem, "Ref") : ExtendShopifyBuy.decodeBase64Id(lineItem.variant.id);
					const product = newState.products[productVariantId] || {
						productQty: 0,
						warrantyQty: 0,
						warranties: []
					}

					if(ExtendShopifyBuy.getCustomAttribute(lineItem, "vendor") === "Extend") {
						product.warrantyQty += lineItem.quantity;
						product.warranties.push(lineItem);
					} else {
						product.productQty += lineItem.quantity;
					}

					newState.products[productVariantId] = product
				})
				
				Object.values(newState.products).forEach(function(data) {
					//Remove warranties without products
					if(data.warrantyQty && !data.productQty) {
						data.warranties.forEach(function(warranty) {
							Checkout.removeLineItems(checkout.id, [warranty.id])
							.then(newCheckout => {	
								callback(newCheckout)
							})
							.catch(err => {
								console.log(err)
							})
						})
					}

					var quantityDiff = data.warrantyQty - data.productQty;

					if(quantityDiff === 0) {
						return;
					}

					if(quantityDiff < 0) {
						return;
					} else {
						data.warranties.forEach(warranty => {
							if (quantityDiff === 0) return
							// start removing quantities until we reach our target
							const newQuantityDiff = Math.max(0, quantityDiff - warranty.quantity)
							const removedQuantity = quantityDiff - newQuantityDiff
							const warrantyToUpdate = {id: warranty.id, quantity: warranty.quantity - removedQuantity};
							Checkout.updateLineItems(checkout.id, [warrantyToUpdate])
							.then(newCheckout => {	
								callback(newCheckout)
							})
							.catch(err => {
								console.log(err)
							})
							
							quantityDiff = newQuantityDiff
						})
					}
				})
			})
			.catch(function(error) {
				return error;
			})
	
	}
	
}

window.ExtendShopifyBuy = ExtendShopifyBuy;