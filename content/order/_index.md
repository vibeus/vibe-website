---
stylesPath: css/order.sass

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
    sold_out: true
  - &red_stand
    product_id: '31815731609651'
    price: 500
    title: Red Portable Stand
    figure: img/order/accessory-stand-r.png
  - &stylus
    product_id: '31815737016371'
    price: 15
    title: Additional Touch Styluses (2)
    figure: img/order/accessory-stylus.png

hero:
  <<: *vibe_board
  body: |
    The Vibe Board is an interactive digital whiteboard that enhances collaboration with a
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
    url: 'https://knowledge.vibe.us/buyers-faq'
  items:
    - title: Could Vibe be mounted on the wall?
      body: |
        Vibe supports standard VESA 200 x 200 mount so the Vibe board can be installed on any compatible wall mounts
        or stands which support at least 65 lbs.
    - title: Does Vibe come with a warranty or maintenance support?
      body: |
        **Yes**.

        Vibe boards purchased through our website come with a one-year warranty.
        See the warranty card in your Vibe package for more information.
    - title: Is Vibe compatible with any webcam?
      body: |
        Vibe is compatible with most USB connected cameras.

        If you are in the market for a new camera that you would want to use with your Vibe board, our team has
        tested the following cameras and can confirm their compatibility with Vibe.
        - Logitech 920
        - Logitech 930
        - Logitech BRIO
        - Logitech Conference Cam Bcc950
        - Logitech Meetup
        - Owl camera
        - Polycom Studio 

        If for any reason you are experiencing issues with connecting a camera or webcam to your Vibe board,
        please contact support at <support@vibe.us> to start a support ticket.
    - title: How long does shipping usually take?
      body: |
        Depending on where you are located, shipping can take anywhere from 3-5 business days.
        (Our warehouses are located in Southern California)
    - title: What are the product dimensions?
      body: |
        **Vibe board dimensions:**
        - Diagonal screen size: 55"
        - Product dimensions: 50.6" (width) x 29.1"(height) x 2.9" (depth)
        - Product weight: 60.6 lbs
        - Package size: 56.7" (width) x 37"(height) x 8.8" (depth)
        - VESA Mount: 200 x 200 mm

        **Vibe stand dimensions:**
        - Stand size: 50.4" (width) x 50.9" (height) x 26" (depth)
        - Weight: 33 lbs

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
