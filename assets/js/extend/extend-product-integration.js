function renderProductOffer() {
  //if an instance is found, do not re-render the offer
  if (window.Extend.buttons.instance('#extend-offer')) {
    return;
  }

  var variant = document
    .querySelector('[data-product-id]')
    .getAttribute('data-product-id');
  if (variant) {
    var referenceId = variant;
    window.Extend.buttons.render('#extend-offer', {
      referenceId: referenceId,
    });
  }
}

window.addEventListener('load', function () {
  renderProductOffer();
});

function handleAddToCart(
  productId,
  productTitle,
  quantity,
  addToCart,
  callback
) {
  //Extend - Handle AddToCart functions
  const component = Extend.buttons.instance('#extend-offer');

  /** get the users plan selection */
  const plan = component.getPlanSelection();
  const product = component.getActiveProduct();

  if (plan) {
    //call back to add initial product to cart, then grab Shopify variant ID for warranty and add that to cart with attributes set
    callback();
    ExtendShopify.getPlanVariant(plan, function (err, planVariant) {
      var term = ExtendShopifyBuy.getTerm(plan);
      addToCart(planVariant.variantId, quantity, [
        { key: 'Ref', value: productId },
        { key: 'Product', value: productTitle },
        { key: 'Term', value: term },
        { key: 'Price', value: ExtendShopifyBuy.insertDecimal(plan.price) },
        { key: 'Vendor', value: 'Extend' },
      ]);
    });
  } else {
    // handle form submission
    var offers = Extend.getOffer(productId);
    if (offers) {
      offers.then(function (res) {
        var count = 0;
        count += res.plans.adh.length || 0;
        count += res.plans.base.length || 0;
        count += res.plans.roadhazard.length || 0;
        if (count > 0) {
          Extend.modal.open({
            referenceId: productId,
            onClose: function (plan, product) {
              // a user has selected a plan.  Add it to their cart.
              if (plan && product) {
                //call back to add initial product to cart, then grab Shopify variant ID for warranty and add that to cart with attributes set
                callback();
                ExtendShopify.getPlanVariant(plan, function (err, planVariant) {
                  var term = ExtendShopifyBuy.getTerm(plan);
                  addToCart(planVariant.variantId, quantity, [
                    { key: 'Ref', value: productId },
                    { key: 'Product', value: productTitle },
                    { key: 'Term', value: term },
                    {
                      key: 'Price',
                      value: ExtendShopifyBuy.insertDecimal(plan.price),
                    },
                    { key: 'Vendor', value: 'Extend' },
                  ]);
                });
              } else {
                //call back to add initial product to cart
                callback();
              }
            },
          });
        } else {
          //call back to add initial product to cart
          callback();
        }
      });
    }
  }
}
