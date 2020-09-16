/*
{{ $cartIcon := resources.Get "img/order/cart.svg" | resources.Minify }}
{{ $products := slice }}
{{ range .products }}
{{ $src := resources.Get .item.figure | resources.Fingerprint }}
{{ $products = $products | append (merge .item (dict "imgSrc" $src.RelPermalink)) }}
{{ end }}
{{ $js := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
{{ $closeIconSrc := resources.Get "mdi/svg/close.svg" | resources.Minify }}
{{ $plusIconSrc := resources.Get "mdi/svg/plus.svg" | resources.Minify }}
{{ $minusIconSrc := resources.Get "mdi/svg/minus.svg" | resources.Minify }}
*/
import { toggleActive } from '{{ $js.RelPermalink }}';

const e = React.createElement;
const { useState, useEffect } = React;
const products = JSON.parse('{{ $products | jsonify }}');
const products_i18n = {};
// {{ range $idx, $it := $products }}
// {{ $i18nKey := $it.title }}
// {{ $i18nValue := T $it.title }}
products_i18n['{{ $i18nKey }}'] = '{{ $i18nValue }}';
// {{ end }}
const storageKey = 'order/cart';
const moneyFmt = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const CLOSE_ICON_SRC =
  'data:image/svg+xml;base64,{{ $closeIconSrc.Content | base64Encode }}';
const MINUS_ICON_SRC =
  'data:image/svg+xml;base64,{{ $minusIconSrc.Content | base64Encode }}';
const PLUS_ICON_SRC =
  'data:image/svg+xml;base64,{{ $plusIconSrc.Content | base64Encode }}';

const MIN_ITEM_COUNT = 1;
const MAX_ITEM_COUNT = 99;

let cart = {};

const LineItemControl = ({ productId, count }) => {
  const [localCount, setLocalCount] = useState(count);

  useEffect(() => {
    setLocalCount(count);
  }, [count]);

  return e(
    'div',
    {
      className: 'control is-count has-icons-left has-icons-right',
    },
    e('input', {
      className: 'input is-small is-rounded is-black',
      type: 'number',
      value: localCount,
      onChange: (ev) => {
        setLocalCount(ev.target.value);
      },
      onBlur: () => {
        setCartCount(productId, parseInt(localCount) || 1);
      },
    }),
    e(
      'span',
      {
        className: 'icon is-small is-left',
        onClick: () => setCartCount(productId, count - 1),
      },
      e('img', { src: MINUS_ICON_SRC })
    ),
    e(
      'span',
      {
        className: 'icon is-small is-right',
        onClick: () => setCartCount(productId, count + 1),
      },
      e('img', { src: PLUS_ICON_SRC })
    )
  );
};

const LineItem = ({ productId, count }) => {
  const product = products.find((x) => x.product_id === productId);
  if (!product) {
    return null;
  }

  let notice = null;
  if (product.sold_out) {
    notice = e(
      'p',
      { className: 'product-notice' },
      product.sold_out.cart_notice
    );
  } else if (product.backorder) {
    notice = e(
      'p',
      { className: 'product-notice' },
      product.backorder.cart_notice
    );
  }

  return e(
    'div',
    {
      className: 'cart-line-item',
    },
    e(
      'figure',
      {
        className: 'image is-item',
      },
      e('img', {
        src: product.imgSrc,
      })
    ),
    e(
      'div',
      {
        className: 'line-item-desc',
      },
      e(
        'p',
        {
          className: 'product-title',
        },
        products_i18n[product.title]
      ),
      notice,
      e(
        'div',
        {
          className: 'price-count',
        },
        e(
          'p',
          {
            className: 'product-price',
          },
          moneyFmt.format(product.price)
        ),
        e(LineItemControl, { productId, count })
      )
    ),
    e(
      'span',
      {
        className: 'icon is-delete',
        onClick: () => removeFromCart(productId),
      },
      e('img', {
        src: CLOSE_ICON_SRC,
      })
    )
  );
};

const App = () => {
  const lineItems = Object.keys(cart).reduce((acc, key) => {
    const count = cart[key];
    if (count > 0) {
      acc.push(
        e(LineItem, {
          productId: key,
          count,
        })
      );
    }

    return acc;
  }, []);

  return e(
    'div',
    {
      className: 'app-root',
    },
    lineItems
  );
};

function loadCart() {
  const value = localStorage.getItem(storageKey);
  if (value) {
    try {
      const obj = JSON.parse(value);
      cart = filterCart(obj);
    } catch {}
  }
}

function saveCart() {
  const filtered = filterCart(cart);
  localStorage.setItem(storageKey, JSON.stringify(filtered));
}

function filterCart(obj) {
  return Object.keys(obj)
    .filter((x) => !!products.find((p) => x === p.product_id))
    .reduce((o, key) => {
      o[key] = obj[key];
      return o;
    }, {});
}

function getCartCount() {
  return Object.keys(cart).reduce((acc, key) => {
    return acc + cart[key];
  }, 0);
}

function getCartAmount() {
  return Object.keys(cart).reduce((acc, key) => {
    const product = products.find((x) => x.product_id === key);
    if (product) {
      return acc + product.price * cart[key];
    } else {
      return acc;
    }
  }, 0);
}

function getCartCheckoutUrl() {
  const lineItems = Object.keys(cart).reduce((acc, key) => {
    const value = cart[key];
    if (value > 0) {
      acc.push(`${key}:${cart[key]}`);
    }

    return acc;
  }, []);

  return `https://order.vibe.us/cart/${lineItems.join(',')}`;
}

function setupGallery() {
  const el = document.querySelector('.product-gallery .glide');

  const glide = new Glide(el, {
    type: 'carousel',
    autoplay: 6000,
  });

  const thumbs = Array.from(
    document.querySelectorAll('.column.is-gallery .thumbnails .image')
  );

  thumbs.forEach((d, idx) => {
    d.addEventListener('click', () => {
      glide.go('=' + idx);
    });
  });

  const updateThumbs = () => {
    thumbs.forEach((x) => x.classList.remove('is-active'));
    thumbs[glide.index].classList.add('is-active');
  };

  glide.on('run.after', updateThumbs);
  glide.on('mount.after', updateThumbs);
  glide.mount();
}

function setupCart() {
  loadCart();

  const cartSelector =
    '.navbar .button.is-nav-cart, .navbar .navbar-brand .button.is-in-brand-mobile';
  document.querySelectorAll(cartSelector).forEach((el) => {
    el.innerHTML =
      '{{ $cartIcon.Content | safeHTML }}<span class="cart-icon-count"></span>';
    el.classList.add('is-cart-icon');
    el.classList.remove('is-outlined');
    if (el.nodeName === 'A') {
      el.setAttribute('href', '#');
    }
    el.dataset.target = 'cart';
  });

  const triggerSelector =
    '.button.is-cart-icon, .modal .modal-background, .modal .icon.is-close';
  toggleActive(triggerSelector, false);

  renderCart();
}

function setupAddCart() {
  document.querySelectorAll('.field.is-add-to-cart').forEach((el) => {
    const productId = el.dataset.productId;
    const input = el.querySelector('input');
    const adjustInput = (value) => {
      const current = parseInt(input.value) || 0;
      const newValue = Math.min(
        Math.max(MIN_ITEM_COUNT, current + value),
        MAX_ITEM_COUNT
      );
      input.value = newValue.toString();
    };
    el.querySelector('.icon.is-left').addEventListener('click', () =>
      adjustInput(-1)
    );
    el.querySelector('.icon.is-right').addEventListener('click', () =>
      adjustInput(1)
    );
    el.querySelector('.button').addEventListener('click', () => {
      addToCart(productId, parseInt(input.value) || 0);
    });
  });
}

function renderCartNumbers() {
  const count = getCartCount();
  const amount = moneyFmt.format(getCartAmount());

  document.querySelectorAll('.cart-icon-count').forEach((el) => {
    el.innerHTML = count.toString();
    if (count > 0) {
      el.style.display = 'block';
    } else {
      el.style.display = '';
    }
  });

  document.querySelectorAll('.modal.is-cart .item-count').forEach((el) => {
    el.innerHTML = `${count} ${count > 1 ? 'items' : 'item'}`;
  });

  document.querySelectorAll('.modal.is-cart .title.is-amount').forEach((el) => {
    el.innerHTML = amount;
  });
}

function renderCheckout() {
  document
    .querySelectorAll('.modal.is-cart .button.is-checkout')
    .forEach((el) => {
      if (getCartCount() <= 0) {
        el.setAttribute('disabled', true);
        el.href = 'javascript:void(0)';
      } else {
        el.removeAttribute('disabled');
        el.href = getCartCheckoutUrl();
      }
    });
}

function renderCart() {
  renderCartNumbers();
  renderCheckout();

  const root = document.getElementById('app-root');
  if (root) {
    ReactDOM.render(e(App), root);
  }
}

function addToCart(productId, count) {
  if (count > 0) {
    const value = (cart[productId] || 0) + count;
    setCartCount(productId, value);
    document.querySelector('.button.is-cart-icon').click();
  }
}

function setCartCount(productId, count) {
  cart[productId] = Math.min(Math.max(count, MIN_ITEM_COUNT), MAX_ITEM_COUNT);
  saveCart();
  renderCart();
}

function removeFromCart(productId) {
  delete cart[productId];
  saveCart();
  renderCart();
}

toggleActive('.faq-title', false);
setupGallery();
setupCart();
setupAddCart();
