---
title: Order your Vibe

is_order: true

products:
  - &vibe_board
    product_id: '31815758250035'
    price: 2999
    title: Vibe Board
    figure: img/order/product-gallery-1.png
  - &white_stand
    product_id: '31815731576883'
    price: 500
    title: White Portable Stand
    figure: img/order/accessory-stand-w.png
  - &red_stand
    product_id: '31815731609651'
    price: 500
    title: Red Portable Stand
    figure: img/order/accessory-stand-r.png
  - &stylus
    product_id: '31815737016371'
    price: 11.99
    title: Vibe Touch Stylus
    figure: img/order/accessory-stylus.png

hero:
  <<: *vibe_board
  body: |
    The Vibe Board is a interactive digital whiteboard that enhances collaboration with a
    4K 55” screen and built in speakers.
  shipping: |
    Complimentary U.S. Shipping + 30-Day Returns
  amazon: https://www.amazon.com/Vibe
  gallery:
    - img/order/product-gallery-1.png
    - img/order/product-gallery-2.png
    - img/order/product-gallery-3.png
    - img/order/product-gallery-4.png
    - img/order/product-gallery-5.png

accessories:
  title: Related accessories
  items:
    - <<: *white_stand
    - <<: *red_stand
    - <<: *stylus
      precision: 2

faq:
  title: FAQs
  see_all:
    title: See more
    url: '#'
  items:
    - title: Is Vibe compatible with any wall mount?
      body: |
        Vibe supports standard VESA 200 x 200 mount so the Vibe board can be installed on any compatible wall mounts
        or stands which support at least 65 lbs.
    - title: Are there any HDMI input?
      body: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
    - title: What are the product dimensions?
      body: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
    - title: Which cameras work with Vibe?
      body: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
    - title: Are there any other accessories available with Vibe?
      body: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
    - title: How is the Vibe board powered?
      body: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.

reviews:
  title: Customer reviews
  items:
    - author: Bgood
      channel: Amazon Buyer
      stars: 5
      date: Jan. 2020
      review: |
        **Best digital whiteboard I’ve used**

        There are a few options out there for digital/collaboration boards.
        I originally purchased the Samsung Flip 2 and had to return it due to its lack of cloud collaboration
        and Samsung-only browser that did not allow for browser-based tools...
      url: 'https://www.amazon.com/gp/customer-reviews/R24TBM6GLRVDRL/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B081LPL772'

bottom_cta:
  title: Still have questions?
  cta:
    title: Contact us
    url: /contact/
---
