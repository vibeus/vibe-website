function initCartOffer(addToCart, updateCart) {
    Extend.buttons.destroyAll();
    renderProductOffer();

   document.querySelectorAll('#extend-cart-offer').forEach(function(el){

    var variantId = el.getAttribute('data-extend-variant')
    var quantity = el.getAttribute('data-extend-quantity')

    const cart = localStorage.getItem('order/cart');
    
    if(ExtendShopifyBuy.warrantyAlreadyInCheckout(variantId, cart)){
        return;
    }

    Extend.buttons.renderSimpleOffer(el, {
     referenceId: variantId,
     onAddToCart: function (options) {
        var product = options.product;
        var plan = options.plan;
        quantity = Number(quantity);
        ExtendShopify.getPlanVariant(plan, function(err, planVariant) {
            var term = ExtendShopifyBuy.getTerm(plan);
            addToCart(planVariant.variantId, quantity, [{'key': 'Ref', 'value': product.id}, {'key': 'Product', 'value': product.name}, { 'key': 'Term', 'value': term }, { 'key': 'Price', 'value': ExtendShopifyBuy.insertDecimal(plan.price) }, { 'key': 'Vendor', 'value': 'Extend' }])
        })
     },
    });


    ExtendShopifyBuy.normalizeCheckout(cart, true, function(isUpdates, checkout){
        if(!isUpdates) return;
        updateCart(checkout)
    })
   })

}
