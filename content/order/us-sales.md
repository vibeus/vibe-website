---
title: i18n-content-order-_index-title
description: Order your Vibe Board, Stylus, and Stand
url: /order/us-sales
layout: us-sales
stylesPath: css/order-us-sales.sass
noFixedNavbar: true
is_order: true
# promo_code: 'NOVEMBER200'
product_notices:
  sold_out: &sold_out
    item_notice:
      Temporarily unavailable. [Let us know](/contact/) if you want to
      be contacted when this item becomes available again.
    cart_notice: Temporarily unavailable.
products:
  - item: &id001
      product_name: vibe_board
      title: i18n-content-order-_index-products-i_0-item-title
      body: i18n-content-order-_index-products-i_0-item-body
      product_id: '31815758250035'
      price: 2999
      # discount_price: 2799
      # discount_info: November Deals $200 off!
      figure: img/order/product-gallery-1.png
      sold_out: false
      backorder: false
        #item_notice: '**Shipping Delayed.** Expected to ship in 1 weeks.'
        #cart_notice: Shipping Delayed. Expected to ship in 1 weeks.
  - item: &id002
      product_name: white_stand
      title: i18n-content-order-_index-products-i_1-item-title
      product_id: '31815731576883'
      price: 500
      figure: img/order/accessory-stand-w.png
      sold_out: false
      backorder:
        item_notice: '**Shipping Delayed.** Expected to ship in 2 weeks.'
        cart_notice: Shipping Delayed. Expected to ship in 2 weeks.
  - item: &id003
      product_name: red_stand
      title: i18n-content-order-_index-products-i_2-item-title
      product_id: '31815731609651'
      price: 500
      figure: img/order/accessory-stand-r.png
      sold_out: false
      backorder:
        item_notice: '**Shipping Delayed.** Expected to ship in 2 weeks.'
        cart_notice: Shipping Delayed. Expected to ship in 2 weeks.
  - item: &id004
      product_name: stylus
      title: i18n-content-order-_index-products-i_3-item-title
      product_id: '31815737016371'
      price: 15
      figure: img/order/accessory-stylus.png
      sold_out: false
      backorder: false
hero:
  item: *id001
  shipping: Complimentary U.S. Shipping + 30-Day Returns
  global_sales:
    icon: img/order/global-sales-icon.svg
    url: /order/global-sales/
    text: Outside of US?
  amazon: https://www.amazon.com/gp/product/B081LPL772/ref=as_li_tl?ie=UTF8&tag=vibe0be-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B081LPL772&linkId=95dfdc3f7512c0ee8f046c0f1d4e59ae
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

how_it_works:
  title1: A touchscreen whiteboard built
  title2: for the modern workspace
  figure: img/order/how-it-works.png
  mobilefigure: img/order/4K-vibe-mobile.png
  link:
book_a_free_demo:
  title1: Collaboration software for however,
  title2: wherever, you work
  items:
    - class: book-demo1
      figure: img/order/book-demo1.png
      title: Video Conferencing with your remote teams
      content: Join or start meetings with the apps your team loves. Use Zoom, Microsoft Teams, Skype, WebEx to connect around the world.
    - class: book-demo2
      figure: img/order/book-demo2.png
      title: Edit in real time on your choice of device
      content: Don't limit yourself to a single screen. Access your canvas through the Vibe Board, through your Mac or PC, or on your mobile device.
    - class: book-demo3
      figure: img/order/book-demo3.png
      title: Screencast enhanced with touch
      content: Fluidly bring content to Vibe by wirelessly casting your screen to Vibe and you can annotate as needed.
ready_to_see:
  title: Ready to see Vibe in action?
  body: Book a demo to see a product overview
  cta:
    title: i18n-content-contact-_index-bottom_cta-cta-title
    buttons:
      - title: Schedule a Live Demo
        link: #
      - title: Watch Demo Video
        link: #
  form:
    action: 'https://api.hsforms.com/submissions/v3/integration/submit/5698963/1270333f-4cc2-4450-901d-d4f9b29fed58'
    controls:
      - - name: firstname
          placeholder: First Name*
          required: true
        - name: lastname
          placeholder: Last Name*
          required: true
      - - name: email
          placeholder: Email Address*
          type: email
          required: true
        - name: phone
          placeholder: Phone Number
          type: tel
      - - name: company
          placeholder: Company Name*
          required: true
        - name: industry_category
          placeholder: Industry*
          required: true
          dropdown:
            - Education
            - Coaching and Training
            - Health Care
            - IT Services
            - Computer Software
            - Real Estate
            - Architecture and Construnction
            - Engineering
            - Financial Services
            - Consulting
            - Marketing and Advertising
            - Arts and Design
            - Government and Organizations
            - Home Office
            - Personal Use and Entertainment
            - Others
      - - name: company_size_classification
          placeholder: Company Size*
          required: true
          dropdown:
            - 1-10
            - 11-100
            - 101-500
            - 501-1000
            - 1001-5000
            - 5001-10000
            - 10000+
        - name: job_role
          placeholder: Role*
          required: true
          dropdown:
            - CXO / VP / President / Owner
            - Principal
            - Director
            - Manager
            - Designer
            - Engineer
            - IT
            - Consultant
            - Teacher / Professor
            - Instructor
            - Influencer
            - Others
    hidden_values:
      vibe_from_education_landing_page: "false"
      vibe_lp_live_demo_request: "false"
    buttons:
      - type: submit
        title: Schedule a Live Demo
        class: button is-rounded is-primary schedule-demo
        name: request-demo
        target_action: 'https://api.hsforms.com/submissions/v3/integration/submit/5698963/f46de797-344a-4c92-b0d3-3555e229394f'
      - type: submit
        title: Watch Demo Video
        class: button is-rounded is-primary is-outlined watch-demo
        name: request-video
    submitted:
      choices:
        - class: is-live-demo
          body: |
            # We’ve sent you an email with a link to schedule your demo. Talk to you soon!
          cta:
            title: Watch Demo Video First
            class: is-primary is-video-demo-link
            url: https://vibe.us/demo/video-demo
        - class: is-video-demo
          body: |
            # We've sent you an email with the video link. Enjoy!
          cta:
            title: Watch Now
            target: _blank
            class: is-primary is-video-demo-link
            url: https://vibe.us/demo/video-demo
            subcta:
              body: Still want to talk to an expert?
              link:
                class: is-live-demo-meeting-link
                body: Schedule a live demo
                url: https://meetings.hubspot.com/jian-zhao/vibe-follow-up
why_vibe:
  title: Why Vibe?
  cta:
    title: Order Now
    url: "#hero"
    class: is-hero-cta is-black is-outlined is-rounded is-order-now
    data:
      - key: target
        value: hero
faq:
  title: i18n-content-order-_index-faq-title
  see_all:
    title: i18n-content-order-_index-faq-see_all-title
    url: /buyer-faq
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

buyer_faq:
  title: Buyer's FAQ
  see_all:
    title: i18n-content-order-_index-faq-see_all-title
    url: /buyer-faq
  items:
    - title: Is Vibe compatible with any wall mount?
      body: Vibe supports standard VESA 200 x 200 mount so the Vibe board can be installed on any compatible wall mounts or stands which support at least 65 lbs.
    - title: Does Vibe has HDMI ports?
      body: Vibe supports standard VESA 200 x 200 mount so the Vibe board can be installed on any compatible wall mounts or stands which support at least 65 lbs.
    - title: Does Vibe has HDMI ports?
      body: Vibe supports standard VESA 200 x 200 mount so the Vibe board can be installed on any compatible wall mounts or stands which support at least 65 lbs.
    - title: Does Vibe has HDMI ports?
      body: Vibe supports standard VESA 200 x 200 mount so the Vibe board can be installed on any compatible wall mounts or stands which support at least 65 lbs.
    - title: Does Vibe has HDMI ports?
      body: Vibe supports standard VESA 200 x 200 mount so the Vibe board can be installed on any compatible wall mounts or stands which support at least 65 lbs.
    - title: Does Vibe has HDMI ports?
      body: Vibe supports standard VESA 200 x 200 mount so the Vibe board can be installed on any compatible wall mounts or stands which support at least 65 lbs.
    - title: Does Vibe has HDMI ports?
      body: Vibe supports standard VESA 200 x 200 mount so the Vibe board can be installed on any compatible wall mounts or stands which support at least 65 lbs.

reviews:
  title: i18n-content-order-_index-reviews-title
  items:
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

bottom_cta:
  title: i18n-content-order-_index-bottom_cta-title
  cta:
    # title: i18n-content-order-_index-bottom_cta-cta-title
    # url: /contact/
    buttons:
      - title: i18n-content-order-_index-bottom_cta-cta-buttons-i_1-title
        url: /contact
      - title: i18n-content-order-_index-bottom_cta-cta-buttons-i_0-title
        url: "#hero"
        class: is-black is-order-now
        data:
          - key: target
            value: hero
---
