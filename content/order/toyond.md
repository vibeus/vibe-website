---
title: i18n-content-order-_index-title
description: Order your Vibe Board, Stylus, and Stand
url: /order/eu-sales
layout: toyond
stylesPath: css/order-us-sales.sass
noFixedNavbar: true
is_order: true
# promo_code: 'NOVEMBER200'
navbar:
  brandURL: https://vibe.us/
  #menu: []
  extra:
    - title: See a Demo
      url: /demo/
      class: is-primary is-outlined is-rounded is-in-brand is-request-demo is-request-demo-gtm
      data:
        - key: target
          value: section-book-demo
    - title: Order a Vibe
      url: /order/eu-sales/
      class: is-primary is-rounded is-in-brand is-nav-cart
      in_brand_mobile: true

product_notices:
  sold_out: &sold_out
    item_notice: Temporarily unavailable. [Let us know](https://vibe.us/contact/) if you want to be contacted when this item becomes available again.
    cart_notice: Temporarily unavailable.
products:
  - item: &id001
      product_name: vibe_board
      title: i18n-content-order-_index-products-i_0-item-title
      body: i18n-content-order-_index-products-i_0-item-body
      product_id: '39540681474222'
      price: 2550
      # discount_price: 2799
      # discount_info: November Deals $200 off!
      figure: img/order/product-gallery-1.png
      sold_out: false
      backorder:
        false
        #item_notice: '**Shipping Delayed.** Expected to ship in 1 weeks.'
        #cart_notice: Shipping Delayed. Expected to ship in 1 weeks.
  - item: &id002
      product_name: white_stand
      title: i18n-content-order-_index-products-i_1-item-title
      product_id: '39541172666542'
      price: 425
      figure: img/order/accessory-stand-w.png
      sold_out: false
      backorder:
        false
        #item_notice: '**Shipping Delayed.** Expected to ship in 2 weeks.'
        #cart_notice: Shipping Delayed. Expected to ship in 2 weeks.
  - item: &id003
      product_name: red_stand
      title: i18n-content-order-_index-products-i_2-item-title
      product_id: '39540746846382'
      price: 425
      figure: img/order/accessory-stand-r.png
      sold_out: false
      backorder:
        false
        #item_notice: '**Shipping Delayed.** Expected to ship in 2 weeks.'
        #cart_notice: Shipping Delayed. Expected to ship in 2 weeks.
  - item: &id004
      product_name: stylus
      title: i18n-content-order-_index-products-i_3-item-title
      product_id: '39540762181806'
      price: 13
      figure: img/order/accessory-stylus.png
      sold_out: false
      backorder: false

hero:
  item: *id001
  shipping: 30-Day Returns
  gallery:
    - img/order/product-gallery-1.png
    - img/order/product-gallery-2.png
    - img/order/product-gallery-3.png
    - img/order/product-gallery-4.png
    - img/order/product-gallery-5.png
accessories:
  title: i18n-content-order-_index-accessories-title
  items:
    - item: *id002
    - item: *id003
    - item: *id004
      precision: 2

trust:
  title: Trusted by
  glide: true

what_is_vibe:
  title: What is Vibe?
  body: Vibe is a collaboration solution that combines an interactive digital whiteboard and smart software. Activate your brainstorming sessions, client presentations, and virtual trainings by combining video conferencing and your favorite applications with an infinite writing canvas.
  mobile_body: Vibe is a collaboration solution that combines an interactive digital whiteboard and smart software.
  player:
    playlistClass: switch-video
    triggerClass: player-trigger
    thumbnail: true
    thumbnailPlaceholderId: thumbnail-placeholder
    thumbnailPlaceholderClass: thumbnail-placeholder
    thumbnailImageClass: thumbnail-image
  playlist:
    - title: Collaborate
      body: Bring remote teams closer with video conferencing and real-time digital whiteboard.
      videoId: 4L2LLp1Mais
    - title: Create
      body: Sketching on Vibe feels like second nature. Keep the ideas flowing from any device, anywhere in the world.
      videoId: 2fYKegdx-Gg
    - title: Engage
      body: Activate your meetings with sharable content from any source, building trust through mutual feedback.
      videoId: A1HIFoPZIEM
  cta:
    buttons:
      - title: See a Demo
        url: /demo/
        class: is-hero-cta is-black is-outlined is-rounded is-request-demo
        data:
          - key: target
            value: section-book-demo

hardware_features:
  title: A touchscreen whiteboard built for the modern workspace
  figure: img/order/hardware-features.png
  figure_mobile: img/order/hardware-features-mobile.png
  features:
    - title: A 55” 4K UHD touch screen and magnetic stylus
      body: 8ms response time makes the stylus-to-touchscreen experience natural and familiar.
    - title: 10 Multi-touch points
      body: 10 multi-touch points allow multiple people to interact with the screen simultaneously via touch or stylus.
    - title: Connections
      body: HDMI In&Out, 3.5mm Audio out, USB 2.0/3.0
    - title: Easy to install, easy to set up
      body: Installation couldn’t be simpler. Vibe takes less than five minutes to install. Vibe also supports wall mounts.
    - title: Portable stand
      body: With Vibe’s portable stand, any room becomes a dynamic meeting space. Red or white.
  cta:
    title: Tech Specs
    url: /resources/Vibe_Tech_Specs.pdf
    class: is-black is-outlined is-rounded
    target: _blank

feature_columns:
  title: Collaboration software for however, wherever, you work
  features:
    - figure: img/order/feature-columns-1.png
      title: Video conferencing with your remote teams
      body: Join or start meetings with the apps your team loves. Use Zoom, Microsoft Teams, Skype, WebEx to connect around the world.
    - figure: img/order/feature-columns-2.png
      title: Edit in real time on your choice of device
      body: Don't limit yourself to a single screen. Access your canvas through the Vibe Board, through your Mac or PC, or on your mobile device.
    - column_class: is-hidden-tablet-only
      figure: img/order/feature-columns-3.png
      title: Screencast enhanced with touch
      body: Fluidly bring content to Vibe by wirelessly casting your screen to Vibe and you can annotate as needed.

book_demo:
  title: Ready to see Vibe in action?
  body: Book a demo to see a product overview.
  figure: img/order/book-demo-bg.png
  figure_background_color: '#66cccc'

why_vibe:
  title: Why Vibe?
  cta:
    title: Order Now
    url: '#hero'
    class: is-hero-cta is-black is-outlined is-rounded is-order-now
    data:
      - key: target
        value: hero

faq:
  title: i18n-content-order-_index-faq-title
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
    - author: RDG
      channel: Amazon Review
      stars: 5
      date: 03/29/2021
      body: i18n-content-order-_index-reviews-items-i_13-body
      url: 'https://www.amazon.com/review/R3M6OJLVOA6TLL/ref=cm_cr_srp_d_rdp_perm?ie=UTF8&ASIN=B081LPL772&_encoding=UTF8&tag=vibe0be-20&linkCode=ur2&linkId=0e27a3989025154ae1f8f2e4cf58dce5&camp=1789&creative=9325'
    - author: Justin Jones
      channel: Amazon Review
      stars: 5
      date: 03/17/2021
      body: i18n-content-order-_index-reviews-items-i_12-body
      url: 'https://www.amazon.com/review/RN53PCAH5M6OS/ref=cm_cr_srp_d_rdp_perm?ie=UTF8&ASIN=B081LPL772&_encoding=UTF8&tag=vibe0be-20&linkCode=ur2&linkId=0e27a3989025154ae1f8f2e4cf58dce5&camp=1789&creative=9325'
    - author: A. Farmer
      channel: Amazon Review
      stars: 5
      date: 03/01/2021
      body: i18n-content-order-_index-reviews-items-i_11-body
      url: 'https://www.amazon.com/review/R81NG0WBD4QMX/ref=cm_cr_srp_d_rdp_perm?ie=UTF8&ASIN=B081LPL772&_encoding=UTF8&tag=vibe0be-20&linkCode=ur2&linkId=0e27a3989025154ae1f8f2e4cf58dce5&camp=1789&creative=9325'
    - author: Kiran R
      channel: Amazon Review
      stars: 3
      date: 02/14/2021
      body: i18n-content-order-_index-reviews-items-i_10-body
      url: 'https://www.amazon.com/review/RB2C6XB8MKAHR/ref=cm_cr_srp_d_rdp_perm?ie=UTF8&ASIN=B081LPL772&_encoding=UTF8&tag=vibe0be-20&linkCode=ur2&linkId=0e27a3989025154ae1f8f2e4cf58dce5&camp=1789&creative=9325'
    - author: Lee C
      channel: Amazon Review
      stars: 5
      date: 02/14/2021
      body: i18n-content-order-_index-reviews-items-i_9-body
      url: 'https://www.amazon.com/review/R1LE9ZWHGV504G/ref=cm_cr_srp_d_rdp_perm?ie=UTF8&ASIN=B081LPL772&_encoding=UTF8&tag=vibe0be-20&linkCode=ur2&linkId=0e27a3989025154ae1f8f2e4cf58dce5&camp=1789&creative=9325'
    - author: Peter Skalla
      channel: Amazon Review
      stars: 5
      date: 01/30/2021
      body: i18n-content-order-_index-reviews-items-i_8-body
      url: 'https://www.amazon.com/review/R2G2IWCG3EA1Y1/ref=cm_cr_srp_d_rdp_perm?ie=UTF8&ASIN=B081LPL772&_encoding=UTF8&tag=vibe0be-20&linkCode=ur2&linkId=0e27a3989025154ae1f8f2e4cf58dce5&camp=1789&creative=9325'
    - author: Chris K
      channel: Amazon Review
      stars: 5
      date: 12/16/2020
      body: i18n-content-order-_index-reviews-items-i_7-body
      url: 'https://www.amazon.com/review/R319EWPB53CPMB/ref=cm_cr_srp_d_rdp_perm?ie=UTF8&ASIN=B081LPL772&_encoding=UTF8&tag=vibe0be-20&linkCode=ur2&linkId=0e27a3989025154ae1f8f2e4cf58dce5&camp=1789&creative=9325'
    - author: Ernst U Frevert
      channel: Amazon Review
      stars: 5
      date: 12/12/2020
      body: i18n-content-order-_index-reviews-items-i_6-body
      url: 'https://www.amazon.com/review/R1JVQZTAKXL4VV/ref=cm_cr_srp_d_rdp_perm?ie=UTF8&ASIN=B081LPL772&_encoding=UTF8&tag=vibe0be-20&linkCode=ur2&linkId=0e27a3989025154ae1f8f2e4cf58dce5&camp=1789&creative=9325'
    - author: TFresquez
      channel: Amazon Review
      stars: 5
      date: 11/02/2020
      body: i18n-content-order-_index-reviews-items-i_5-body
      url: 'https://www.amazon.com/review/R2R6JOXWT2UM3B/ref=cm_cr_srp_d_rdp_perm?ie=UTF8&ASIN=B081LPL772&_encoding=UTF8&tag=vibe0be-20&linkCode=ur2&linkId=0e27a3989025154ae1f8f2e4cf58dce5&camp=1789&creative=9325'
    - author: SeanDon2000
      channel: Amazon Review
      stars: 5
      date: 10/20/2020
      body: i18n-content-order-_index-reviews-items-i_4-body
      url: 'https://www.amazon.com/review/R2BWH4L1DDPWIA/ref=cm_cr_srp_d_rdp_perm?ie=UTF8&amp;ASIN=B081LPL772&_encoding=UTF8&tag=vibe0be-20&linkCode=ur2&linkId=0e27a3989025154ae1f8f2e4cf58dce5&camp=1789&creative=9325'
    - author: Mark
      channel: Amazon Review
      stars: 5
      date: 06/12/2020
      body: i18n-content-order-_index-reviews-items-i_0-body
      url: 'https://www.amazon.com/review/R33AJRRSO37TBG/ref=cm_cr_srp_d_rdp_perm?ie=UTF8&amp;ASIN=B081LPL772&_encoding=UTF8&tag=vibe0be-20&linkCode=ur2&linkId=10ff97b8c5159d3db1f979b774d7f976&camp=1789&creative=9325'
    - author: SC Native
      channel: Amazon Review
      stars: 5
      date: 06/10/2020
      body: i18n-content-order-_index-reviews-items-i_1-body
      url: 'https://www.amazon.com/review/R3LP7HT4QXQIVB/ref=cm_cr_srp_d_rdp_perm?ie=UTF8&amp;ASIN=B081LPL772&_encoding=UTF8&tag=vibe0be-20&linkCode=ur2&linkId=7600cf45bc2cffc0d9ccb1433673be14&camp=1789&creative=9325'
    - author: Gina Fant-Simon
      channel: Amazon Review
      stars: 5
      date: 06/04/2020
      body: i18n-content-order-_index-reviews-items-i_2-body
      url: 'https://www.amazon.com/review/R1CMYUR0OAPGE6/ref=cm_cr_srp_d_rdp_perm?ie=UTF8&amp;ASIN=B081LPL772&_encoding=UTF8&tag=vibe0be-20&linkCode=ur2&linkId=7c2dfb5ef15932f2dcdfb6f7bfa0c59f&camp=1789&creative=9325'
    - author: Bgood
      channel: Amazon Review
      stars: 5
      date: 01/17/2020
      body: i18n-content-order-_index-reviews-items-i_3-body
      url: 'https://www.amazon.com/review/R24TBM6GLRVDRL/ref=cm_cr_srp_d_rdp_perm?ie=UTF8&amp;ASIN=B081LPL772&_encoding=UTF8&tag=vibe0be-20&linkCode=ur2&linkId=fdf0cd99903266051afe8763dfa5ea17&camp=1789&creative=9325'
---
