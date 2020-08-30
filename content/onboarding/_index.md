---
title: 'Onboarding'
stylesPath: css/onboarding.sass

hero:
  title: 'Welcome to Vibe!'
  body: "You're the newest member of the growing Vibe community, and we are so glad that you're here."
  cta:
    - class: is-hidden-mobile
      link:
        class: scroll-down-link
        text: 'Scroll down to get started ↓'
        scroll_to_id: &setup_id setup
    - class: is-hidden-tablet
      title: 'Scroll down to get started'
      link:
        class: scroll-down-link
        scroll_to_id: &setup_id setup
        icon:
          class: scroll-down
          url: img/onboarding/scroll-down-icon.svg
setup:
  id: *setup_id
  progress:
    class: is-hidden-mobile
    progress_bars:
      - class: progress-step-1
        bar:
          class: step-bar-1
          url: img/onboarding/step-bar-1.svg
      - class: progress-step-2
        bar:
          class: step-bar-2
          url: img/onboarding/step-bar-2.svg
      - class: progress-step-3
        bar:
          class: step-bar-3
          url: img/onboarding/step-bar-3.svg
      - class: progress-step-4
        bar:
          class: step-bar-4
          url: img/onboarding/step-bar-4.svg
  glide_class: enable-user-select
  steps:
    - class: step-1
      step_number_icon:
        class: is-hidden-tablet
        url: img/onboarding/step-number-1.svg
      columns:
        - class: content-text-column
          title: 'Unbox and install your Vibe board and stand.'
          cta:
            - link:
                text: 'Vibe 55” digital whiteboard user manual'
                icon:
                  class: download-icon
                  url: img/common/download-icon.svg
                url: https://f.hubspotusercontent10.net/hubfs/5698963/Vibe%20User%20Manual.pdf
            - link:
                text: 'FAQ – Can we mount Vibe on a wall or use with other stands?'
                icon:
                  class: faq-icon
                  text: '  →'
                url: https://knowledge.vibe.us/installation
        - class: content-video-column
          column_size: is-7
          body:
            - video:
                playerId: unbox-tablet
                triggerClass: unbox-tablet
                id: 7ZsShHUzqHs
                placeholder: img/onboarding/installation.png
    - class: step-2
      step_number_icon:
        class: is-hidden-tablet
        url: img/onboarding/step-number-2.svg
      columns:
        - class: content-text-column
          title: 'Set up your device and Vibe account.'
          body:
            - figure:
                class: is-hidden-from-900px
                url: img/onboarding/setup.png
            - text: "* If you've already set up a Vibe account, you can use it to sign into the board."
          cta:
            - link:
                text: 'Learn More'
                url: https://knowledge.vibe.us/quick-start-guide
        - class: figure_column is-hidden-until-900px
          column_size: is-7
          body:
            - figure:
                class: is-hidden-mobile
                url: img/onboarding/setup.png
    - class: step-3
      step_number_icon:
        class: is-hidden-tablet
        url: img/onboarding/step-number-3.svg
      submit_button_column:
        class: submit-button-column is-hidden-until-900px
        column_size: is-3
        button:
          id: &submit_button_id submit-button
          class: button is-rounded is-black is-outlined
          title: 'Submit'
      columns:
        - class: content-form-column
          title: 'Register your device.'
          cta:
            - body: 'Your Vibe board purchase includes a 1-year warranty.'
            - link:
                text: 'Read warranty policy'
                url: /warranty/
          body:
            - form:
                action: https://api.hsforms.com/submissions/v3/integration/submit/5698963/3d3eac66-7345-4825-a6e8-df8d0575832e
                controls:
                  - - name: firstname
                      placeholder: 'First Name*'
                      required: true
                    - name: lastname
                      placeholder: 'Last Name*'
                      required: true
                    - name: phone
                      placeholder: 'Phone Number*'
                      type: tel
                      required: true
                  - - name: email
                      placeholder: 'Email Address*'
                      type: email
                      required: true
                    - name: country_region
                      placeholder: 'Country/Region'
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
                  - - name: company
                      placeholder: 'Company Name'
                    - name: how_did_you_hear_about_vibe
                      placeholder: 'How did you hear about Vibe?'
                      dropdown:
                        - Google Search
                        - Google Ads
                        - Facebook
                        - Instagram
                        - LinkedIn
                        - Referral
                        - Youtube
                        - Others
                  - - name: date_of_purchase
                      placeholder: 'Date of Purchase'
                    - name: serial_number
                      placeholder: 'Serial Number*'
                      required: true
                      annotation:
                        icon: img/onboarding/question-mark.svg
                        content:
                          - text: 'Two ways to find your device serial number'
                          - text: '1. Check the back of board, and you can find the serial number above the bar code.'
                          - figure: img/onboarding/serial-number.png
                          - text: '2. Turn on the device, find ‘About Vibe’ under Settings, and then you can see the serial number.'
                buttons:
                  - type: submit
                    title: 'Submit'
                    class: button is-rounded is-black is-outlined is-fullwidth
                    id: *submit_button_id
                submitted:
                  title: 'Thanks for registering your device.'
    - class: step-4
      step_number_icon:
        class: is-hidden-tablet
        url: img/onboarding/step-number-4.svg
      columns:
        - class: content-text-column
          title: 'You are all set!'
          body:
            - figure:
                url: img/onboarding/desktop-screen.png
          cta:
            - body: 'Experience Vibe for yourself.'
            - link:
                class: scroll-down-link
                icon:
                  class: scroll-down-icon
                  url: img/onboarding/scroll-down-icon.svg
                scroll_to_id: &get_started_id get-started
get_started:
  title: Get started with Vibe
  id: *get_started_id
  items:
    - title: 'Whiteboarding'
      column_size: is-one-third
      links:
        - text: 'Using the whiteboard'
          url: https://knowledge.vibe.us/toolbar-tutorial
        - text: 'Import files to your Vibe board'
          url: https://knowledge.vibe.us/importing-files
        - text: 'Save and share a board'
          url: https://knowledge.vibe.us/save-share-board
    - title: 'Screencast & Annotation'
      column_size: is-one-third
      links:
        - text: 'How to screencast'
          url: https://knowledge.vibe.us/how-to-screencast
        - text: 'Using HDMI on Vibe'
          url: https://knowledge.vibe.us/how-to-use-hdmi-with-vibe
        - text: 'Screenshot and Annotation'
          url: https://knowledge.vibe.us/screenshot/annotation-feature
    - title: 'Third party applications'
      column_size: is-one-third
      links:
        - text: 'How to download applications'
          url: https://knowledge.vibe.us/how-to-download-applications
        - text: 'Using Microsoft Teams on Vibe'
          url: https://knowledge.vibe.us/how-to-use-vibe-within-microsoft-teams-app
        - text: 'Using Zoom on Vibe'
          url: https://knowledge.vibe.us/zoom-overview
help:
  items:
    - title: 'Video Tutorials'
      body: 'Step by step walkthroughs of the newest features and customer favorites.'
      figure: img/onboarding/help-1.png
      url: /video-tutorial/
      column_size: is-one-third
    - title: 'Help Center'
      body: 'See guides on popular features and search for answers to your questions.'
      figure: img/onboarding/help-2.png
      url: https://help.vibe.us
    - title: 'Warranty'
      body: 'Detailed information about your Vibe warranty.'
      figure: img/onboarding/help-3.png
      url: /warranty/
      column_size: is-one-third
  contact_widget:
    title: 'Have Questions ?'
    logo_icon: img/common/outline-logo.svg
    collapse_icon: img/onboarding/contact-widget-collapse-icon.svg
    email:
      icon: img/onboarding/email-icon.svg
      address: info@vibe.us
    phone:
      icon: img/onboarding/phone-icon.svg
      number_href: +1-864-335-2007
      number: +1 (864) 335-2007
---
