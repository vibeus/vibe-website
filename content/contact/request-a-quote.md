---
title: Request a quote
description: Contact Vibe Support and Sales with any questions you may have. We're here for you!
layout: contact
stylesPath: css/request-a-quote.sass
hero:
  title: Request a Quote
  body:
    - text: Need a PO? Have a bulk order? Have a delivery address outside of the continental US?
    - text: Use this form to let us know how we can best help.
contact:
  form:
    action: https://api.hsforms.com/submissions/v3/integration/submit/5698963/9cafe0a9-b62b-446d-bbd8-e68e8b9b0467
    controls:
      - - name: firstname
          placeholder: First Name*
          required: true
        - name: lastname
          placeholder: Last Name*
          required: true
        - name: company
          placeholder: Company
          required: false
      - - name: email
          placeholder: Work Email
          type: email
          required: true
        - name: phone
          placeholder: Phone Number
          type: tel
        - name: country
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
      - - name: address
          placeholder: Address
      - - name: city
          placeholder: City
        - name: state
          placeholder: State
        - name: zip
          placeholder: Zip
      - - name: which_best_describes_your_interest_in_a_vibe_whiteboard_
          placeholder: Which best describes your interest in a Vibe Whiteboard?
          dropdown:
            - Learning at Home
            - Education
            - Marketing
            - Professional Services
            - Technology
            - Personal Use & Entertainment
            - General
            - Architecture, Construction, Engineering
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
          required: true
    buttons:
      - type: submit
        title: Submit
        class: button is-rounded is-primary
    submitted:
      title: Thanks!
      body: We will get back to you as soon as we can.
bottom_cta:
  title: Experience Vibe for yourself
  cta:
    title: See a Demo
---
