---
stylesPath: css/order.sass
title: i18n-content-order-_index-title
noFixedNavbar: true
is_order: true
product_notices:
  sold_out: &sold_out
    item_notice:
      Temporarily unavailable. [Let us know](/contact/) if you want to
      be contacted when this item becomes available again.
    cart_notice: Temporarily unavailable.
products:
  - &vibe_board
    product_id: '31815758250035'
    price: 2999
    title: i18n-content-order-_index-products-i_0-title
    figure: img/order/product-gallery-1.png
    sold_out: false
    backorder: false
  - &white_stand
    product_id: '31815731576883'
    price: 500
    title: i18n-content-order-_index-products-i_1-title
    figure: img/order/accessory-stand-w.png
    sold_out: false
    backorder: false
  - &red_stand
    product_id: '31815731609651'
    price: 500
    title: i18n-content-order-_index-products-i_2-title
    figure: img/order/accessory-stand-r.png
    sold_out: false
    backorder: false
  - &stylus
    product_id: '31815737016371'
    price: 15
    title: i18n-content-order-_index-products-i_3-title
    figure: img/order/accessory-stylus.png
    sold_out: false
    backorder: false
hero:
  <<: *vibe_board
  body: i18n-content-order-_index-hero-body
  shipping: 'Complimentary U.S. Shipping + 30-Day Returns'
  amazon: https://www.amazon.com/Vibe
  gallery:
    - img/order/product-gallery-1.png
    - img/order/product-gallery-2.png
    - img/order/product-gallery-3.png
    - img/order/product-gallery-4.png
    - img/order/product-gallery-5.png
accessories:
  title: i18n-content-order-_index-accessories-title
  items:
    - <<: *white_stand
    - <<: *red_stand
    - <<: *stylus
      precision: 2
faq:
  title: i18n-content-order-_index-faq-title
  see_all:
    title: i18n-content-order-_index-faq-see_all-title
    url: https://knowledge.vibe.us/buyers-faq
  items:
    - title: i18n-content-order-_index-faq-items-i_0-title
      body: i18n-content-order-_index-faq-items-i_0-body
    - title: i18n-content-order-_index-faq-items-i_1-title
      body: i18n-content-order-_index-faq-items-i_1-body
    - title: i18n-content-order-_index-faq-items-i_2-title
      body: i18n-content-order-_index-faq-items-i_2-body
    - title: i18n-content-order-_index-faq-items-i_3-title
      body: i18n-content-order-_index-faq-items-i_3-body
    - title: i18n-content-order-_index-faq-items-i_4-title
      body: i18n-content-order-_index-faq-items-i_4-body
reviews:
  title: i18n-content-order-_index-reviews-title
  items:
    - author: Bgood
      channel: Amazon Buyer
      stars: 5
      date: Jan. 2020
      review: |
        **Best digital whiteboard I've used**

        There are a few options out there for digital/collaboration boards.
        I originally purchased the Samsung Flip 2 and had to return it due to its lack of cloud collaboration
        and Samsung-only browser that did not allow for browser-based tools...
      url: https://www.amazon.com/gp/customer-reviews/R24TBM6GLRVDRL/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B081LPL772
bottom_cta:
  title: i18n-content-order-_index-bottom_cta-title
  cta:
    title: i18n-content-order-_index-bottom_cta-cta-title
    url: /contact/
---
