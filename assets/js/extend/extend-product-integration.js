function renderProductOffer() {
    window.addEventListener('load', function(){
	    //if an instance is found, do not re-render the offer
        if(window.Extend.buttons.instance('#extend-offer')){
            return;
        }
        
        
        var variant = document.querySelector('[data-product-id]').getAttribute('data-product-id');
        if(variant){
            var referenceId =  variant;
            window.Extend.buttons.render('#extend-offer', {
                referenceId: referenceId
            })
        }
    })
}

function handleAddToCart(productId, productTitle, quantity, addToCart, callback) {
    //Extend - Handle AddToCart functions
    const component = Extend.buttons.instance('#extend-offer')

    /** get the users plan selection */
    const plan = component.getPlanSelection()
    const product = component.getActiveProduct()
    
    if (plan) {
        // add plan to cart, then handle form submission
        ExtendShopify.getPlanVariant(plan, function(err, planVariant) {
            var term = ExtendShopifyBuy.getTerm(plan);
            addToCart(planVariant.variantId, quantity, [{'key': 'Ref', 'value': productId}, {'key': 'Product', 'value': productTitle}, { 'key': 'Term', 'value': term }])
            callback()
        })
    } else {
        // handle form submission
        var offers = Extend.getOffer(productId);
        if(offers){
            offers.then(function(res){
                var count = 0;
                count += res.plans.adh.length || 0;
                count += res.plans.base.length || 0;
                count += res.plans.roadhazard.length || 0;
                if(count > 0) {
                    Extend.modal.open({
                        referenceId: productId,
                        onClose: function(plan, product) {
                            if (plan && product) {
                                // a user has selected a plan.  Add it to their cart.
                                ExtendShopify.getPlanVariant(plan, function(err, planVariant) {
                                    var term = ExtendShopifyBuy.getTerm(plan);
                                    addToCart(planVariant.variantId, quantity, [{'key': 'Ref', 'value': productId}, {'key': 'Product', 'value': productTitle}, { 'key': 'Term', 'value': term }])
                                    callback()
                                })
                            } else {
                                callback()
                            }
                        },
                        })
                } else {
                    callback();
                }
            })
        }

    }
}

renderProductOffer();

