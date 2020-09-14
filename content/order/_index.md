---
stylesPath: css/order.sass
title: i18n-content-order-_index-title
noFixedNavbar: true
is_order: true

navbar:
  extra:
    - title: i18n-data-common-nav-base-extra-i_0-title
      class: is-primary is-outlined is-rounded is-in-brand is-hidden-mobile
      url: /demo/
      in_brand_mobile: true
    - title: i18n-data-common-nav-base-extra-i_1-title
      class: is-primary is-rounded is-nav-cart is-in-brand
      url: /order/
      in_brand_mobile: true

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
    backorder:
      item_notice: '**Shipping Delayed.** Expected to ship in 12-18 days.'
      cart_notice: 'Shipping Delayed. Expected to ship in 12-18 days.'
  - &white_stand
    product_id: '31815731576883'
    price: 500
    title: i18n-content-order-_index-products-i_1-title
    figure: img/order/accessory-stand-w.png
    sold_out: false
    backorder:
      item_notice: '**Shipping Delayed.** Expected to ship in 12-18 days.'
      cart_notice: 'Shipping Delayed. Expected to ship in 12-18 days.'
  - &red_stand
    product_id: '31815731609651'
    price: 500
    title: i18n-content-order-_index-products-i_2-title
    figure: img/order/accessory-stand-r.png
    sold_out: false
    backorder:
      item_notice: '**Shipping Delayed.** Expected to ship in 12-18 days.'
      cart_notice: 'Shipping Delayed. Expected to ship in 12-18 days.'
  - &stylus
    product_id: '31815737016371'
    price: 15
    title: i18n-content-order-_index-products-i_3-title
    figure: img/order/accessory-stylus.png
    sold_out: false
    backorder:
      item_notice: '**Shipping Delayed.** Expected to ship in 12-18 days.'
      cart_notice: 'Shipping Delayed. Expected to ship in 12-18 days.'
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
    - author: Mark
      channel: Amazon Review
      stars: 5
      date: 06/12/2020
      review: |
        **Great for Courtroom presentations, collaboration, and meetings**

        I recently bought a Vibe Interactive 4k Touchscreen board. Since then I have used it in about 20 court
        hearings which were conducted by video conference. I also use it daily in meetings with my clients, witnesses,
        vendors and attorneys across the United States. The Vibe board is the best and most effective interactive
        board I have used...
      url: https://www.amazon.com/gp/customer-reviews/R33AJRRSO37TBG/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B081LMQZGF
    - author: SC Native
      channel: Amazon Review
      stars: 5
      date: 06/10/2020
      review: |
        **This is a great white board/UC system**

        The system is very user friendly and offers feature rich apps. Vibe has bridged technology that is usually
        not available or very clunky to use. The price and quality is unbeatable with great technical support.
        I have deployed many boards in a corporate environment with little issues... I highly recommend the Vibe Board
        for a small to medium conference room...
      url: https://www.amazon.com/gp/customer-reviews/R3LP7HT4QXQIVB/ref=cm_cr_arp_d_rvw_ttl?ie=UTF8&ASIN=B081LMQZGF
    - author: Gina Fant-Simon
      channel: Amazon Review
      stars: 5
      date: 06/04/2020
      review: |
        **Amazing - user-friendly - awesome whiteboard**

        I started shopping for a whiteboard and I was pretty astounded at the high prices - I was feeling discouraged
        and then I saw the Vibe board and how affordable it was compared to the name brands... Now, months later,
        you would have to pry this out of my hands... I am blown away by this board. It shows up as an airplay device
        then in one click I'm sharing changes to a project I'm working on, doing a presentation and then zooming with
        a colleague in Ireland... I've sent them countless support questions and over the months, their tech team
        consistently responds pretty much immediately or within a few hours...
      url: https://www.amazon.com/gp/customer-reviews/R1CMYUR0OAPGE6/ref=cm_cr_arp_d_rvw_ttl?ie=UTF8&ASIN=B081LMQZGF
    - author: Bgood
      channel: Amazon Review
      stars: 5
      date: 01/17/2020
      review: |
        **Best digital whiteboard I've used**

        There are a few options out there for digital/collaboration boards.
        I originally purchased the Samsung Flip 2 and had to return it due to its lack of cloud collaboration
        and Samsung-only browser that did not allow for browser-based tools. What really stands out with the Vibe
        besides its good looks and large, brilliant screen, is the interface that allows for easily adding popular
        tools like Miro or Jira- tools a creative director or product manager needs to work with multiple teams...
      url: https://www.amazon.com/gp/customer-reviews/R24TBM6GLRVDRL/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B081LPL772
bottom_cta:
  title: i18n-content-order-_index-bottom_cta-title
  cta:
    title: i18n-content-order-_index-bottom_cta-cta-title
    url: /contact/
---
