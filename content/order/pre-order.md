---
title: i18n-content-order-_index-title
description: Order your Vibe Board, Stylus, and Stand
url: /order/pre-order/
layout: pre-order
stylesPath: css/pre-order.sass
noFixedNavbar: true
is_order: true
# promo_code: 'NOVEMBER200'
navbar:
  brandURL: '/'
  # menu: []
  extra:
    - title: Order a Vibe
      url: https://vibe.us/order/
      class: is-primary is-rounded is-in-brand is-nav-cart
      in_brand_mobile: true

products:
  - item: &id001
      product_name: vibe_board_75
      title: Vibe Pro 75" Digital Whiteboard
      body: An all-in-one solution that combines an interactive digital whiteboard and smart software on a 75" 4K Ultra HD display.
      product_id: '39333799329843'
      price: 6999
      deposit_price: 700
      figure: img/order/pre-order/product-gallery-1.png
      backorder:
        item_notice: Shipping begins August 2021
        cart_notice: Shipping begins August 2021
  - item: &id002
      product_name: vibe_stand_75
      title: Portable Stand for Vibe Pro 75"
      body: Compatible with Vibe Pro 75" Digital Whiteboard. All metal design, simple and durable. Easily to move. Make any room a dynamic teamwork space.
      product_id: '39384958238771'
      price: 899
      deposit_price: 90
      figure: img/order/pre-order/stand-gallery-1.png
      backorder:
        item_notice: Shipping begins August 2021
        cart_notice: Shipping begins August 2021

hero:
  - item: *id001
    shipping: Free Shipping in the Contiguous U.S. + 1-Year Warranty
    autoplay: 6000
    gallery:
      - img/order/pre-order/product-gallery-1.png
      - img/order/pre-order/product-gallery-2.png
      - img/order/pre-order/product-gallery-3.png
  - item: *id002
    shipping: Free Shipping in the Contiguous U.S. + 1-Year Warranty
    autoplay:
    gallery:
      - img/order/pre-order/stand-gallery-1.png
      - img/order/pre-order/stand-gallery-2.png
      - img/order/pre-order/stand-gallery-3.png

contact:
  title: Get a Quote
  body: |
    Not ready to pre-order yet? Need a PO? Have a bulk order?

    Use this form to let us know how we can best help.
  form:
    action: https://api.hsforms.com/submissions/v3/integration/submit/5698963/5d8057db-db0a-41a3-a33f-46d64aa44641
    controls:
      - - name: firstname
          placeholder: First Name*
          required: true
        - name: lastname
          placeholder: Last Name*
          required: true
        - name: email
          placeholder: Work Email*
          type: email
          required: true
      - - name: country
          column_class: is-one-third-tablet
          placeholder: Country*
          required: true
          dropdown:
            - United States
            - Canada
            - Afghanistan
            - Albania
            - Algeria
            - American Samoa
            - Andorra
            - Angola
            - Anguilla
            - Antarctica
            - Antigua and Barbuda
            - Argentina
            - Armenia
            - Aruba
            - Australia
            - Austria
            - Azerbaijan
            - Bahamas (the)
            - Bahrain
            - Bangladesh
            - Barbados
            - Belarus
            - Belgium
            - Belize
            - Benin
            - Bermuda
            - Bhutan
            - Bolivia (Plurinational State of)
            - Bonaire
            - Bosnia and Herzegovina
            - Botswana
            - Bouvet Island
            - Brazil
            - British Indian Ocean Territory (the)
            - Brunei Darussalam
            - Bulgaria
            - Burkina Faso
            - Burundi
            - Cabo Verde
            - Cambodia
            - Cameroon
            - Cayman Islands (the)
            - Central African Republic (the)
            - Chad
            - Chile
            - China
            - Christmas Island
            - Cocos (Keeling) Islands (the)
            - Colombia
            - Comoros (the)
            - Congo (the Democratic Republic of the)
            - Congo (the)
            - Cook Islands (the)
            - Costa Rica
            - Croatia
            - Cuba
            - Curaçao
            - Cyprus
            - Czechia
            - Côte d'Ivoire
            - Denmark
            - Djibouti
            - Dominica
            - Dominican Republic
            - Ecuador
            - Egypt
            - El Salvador
            - Equatorial Guinea
            - Eritrea
            - Estonia
            - Eswatini
            - Ethiopia
            - Falkland Islands (the) [Malvinas]
            - Faroe Islands (the)
            - Fiji
            - Finland
            - France
            - French Guiana
            - French Polynesia
            - French Southern Territories (the)
            - Gabon
            - Gambia (the)
            - Georgia
            - Germany
            - Ghana
            - Gibraltar
            - Greece
            - Greenland
            - Grenada
            - Guadeloupe
            - Guam
            - Guatemala
            - Guernsey
            - Guinea
            - Guinea-Bissau
            - Guyana
            - Haiti
            - Heard Island and McDonald Islands
            - Holy See (the)
            - Honduras
            - Hong Kong
            - Hungary
            - Iceland
            - India
            - Indonesia
            - Iran (Islamic Republic of)
            - Iraq
            - Ireland
            - Isle of Man
            - Israel
            - Italy
            - Jamaica
            - Japan
            - Jersey
            - Jordan
            - Kazakhstan
            - Kenya
            - Kiribati
            - Korea (the Democratic People's Republic of)
            - Korea (the Republic of)
            - Kuwait
            - Kyrgyzstan
            - Lao People's Democratic Republic (the)
            - Latvia
            - Lebanon
            - Lesotho
            - Liberia
            - Libya
            - Liechtenstein
            - Lithuania
            - Luxembourg
            - Macao
            - Madagascar
            - Malawi
            - Malaysia
            - Maldives
            - Mali
            - Malta
            - Marshall Islands (the)
            - Martinique
            - Mauritania
            - Mauritius
            - Mayotte
            - Mexico
            - Micronesia (Federated States of)
            - Moldova (the Republic of)
            - Monaco
            - Mongolia
            - Montenegro
            - Montserrat
            - Morocco
            - Mozambique
            - Myanmar
            - Namibia
            - Nauru
            - Nepal
            - Netherlands
            - New Caledonia
            - New Zealand
            - Nicaragua
            - Niger (the)
            - Nigeria
            - Niue
            - Norfolk Island
            - Northern Mariana Islands (the)
            - Norway
            - Oman
            - Pakistan
            - Palau
            - Palestine
            - Panama
            - Papua New Guinea
            - Paraguay
            - Peru
            - Philippines (the)
            - Pitcairn
            - Poland
            - Portugal
            - Puerto Rico
            - Qatar
            - Republic of North Macedonia
            - Romania
            - Russian Federation (the)
            - Rwanda
            - Réunion
            - Saint Barthélemy
            - Saint Kitts and Nevis
            - Saint Lucia
            - Saint Martin (French part)
            - Saint Pierre and Miquelon
            - Saint Vincent and the Grenadines
            - Samoa
            - San Marino
            - Sao Tome and Principe
            - Saudi Arabia
            - Senegal
            - Serbia
            - Seychelles
            - Sierra Leone
            - Singapore
            - Sint Maarten (Dutch part)
            - Slovakia
            - Slovenia
            - Solomon Islands
            - Somalia
            - South Africa
            - South Georgia and the South Sandwich Islands
            - South Sudan
            - Spain
            - Sri Lanka
            - Sudan (the)
            - Suriname
            - Svalbard and Jan Mayen
            - Sweden
            - Switzerland
            - Syrian Arab Republic
            - Taiwan (Province of China)
            - Tajikistan
            - Tanzania
            - Thailand
            - Timor-Leste
            - Togo
            - Tokelau
            - Tonga
            - Trinidad and Tobago
            - Tunisia
            - Turkey
            - Turkmenistan
            - Turks and Caicos Islands (the)
            - Tuvalu
            - Uganda
            - Ukraine
            - United Arab Emirates
            - United Kingdom
            - United States Minor Outlying Islands (the)
            - Uruguay
            - Uzbekistan
            - Vanuatu
            - Venezuela (Bolivarian Republic of)
            - Vietnam
            - Virgin Islands (British)
            - Virgin Islands (U.S.)
            - Wallis and Futuna
            - Western Sahara
            - Yemen
            - Zambia
            - Zimbabwe
            - Åland Islands
        - name: address
          placeholder: Address
      - - name: city
          placeholder: City
        - name: state
          placeholder: State/Region*
          required: true
        - name: zip
          placeholder: Zip*
          required: true
      - - name: number_of_boards
          placeholder: Number of Boards*
          required: true
        - name: number_of_stands
          placeholder: Number of Stands*
          required: true
        - name: how_many_pairs_of_additional_styluses_would_you_like_
          placeholder: Number of additional styluses
      - - name: anything_else_we_should_know_
          placeholder: Anything else we should know?
          type: textarea
    buttons:
      - type: submit
        title: Submit
        class: button is-rounded is-primary is-medium
    submitted:
      title: Thanks!
      body: We will get back to you as soon as we can.

bottom_cta:
  title: Still have questions?
  cta:
    buttons:
      - title: Contact Sales
        url: /contact/
        class: is-black
---
