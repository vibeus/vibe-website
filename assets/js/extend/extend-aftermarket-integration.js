(function () {
  function URLSearchParams(searchString) {
    if (window.URLSearchParams) {
      return new window.URLSearchParams(window.location.search).get(
        searchString
      );
    } else {
      var self = this;
      self.searchString = searchString;
      self.get = function (name) {
        var results = new RegExp('[?&]' + name + '=([^&#]*)').exec(
          self.searchString
        );
        if (results == null) {
          return null;
        } else {
          return decodeURI(results[1]) || 0;
        }
      };
    }
  }
  window.Extend.URLSearchParams = URLSearchParams;
})();

function initAfterInt(addToCart) {
  const cart = localStorage.getItem('order/cart');
  var leadToken = window.Extend.URLSearchParams('leadToken');
  if (
    leadToken &&
    !ExtendShopifyBuy.leadTokenAlreadyInCheckout(leadToken, cart)
  ) {
    Extend.aftermarketModal.open({
      leadToken: leadToken,
      onClose: function (plan, product, quantity) {
        if (plan && product) {
          ExtendShopify.getPlanVariant(plan, function (err, planVariant) {
            var term = ExtendShopifyBuy.getTerm(plan);
            addToCart(planVariant.variantId, quantity, [
              { key: 'Product', value: product.name },
              { key: 'Term', value: term },
              {
                key: 'Price',
                value: ExtendShopifyBuy.insertDecimal(plan.price),
              },
              { key: 'Vendor', value: 'Extend' },
              { key: 'Extend.LeadToken', value: leadToken },
              { key: 'Extend.LeadQuantity', value: String(quantity) },
            ]);
            document.querySelector('.button.is-cart-icon').click();
          });
        }
      },
    });
  }
}
