---
title: Contact us
description: Contact Vibe Support and Sales with any questions you may have. We're here for you!
layout: contact
stylesPath: css/contact.sass
hero:
  title: i18n-content-contact-_index-hero-title
  body:
    - text: Have a question? We’d love to hear from you.
    - class: spacing-block
    - class: display-flex
      icon:
        class: location-icon
        url: img/contact/location.svg
      text: If you need a PO or have a delivery address outside of the continental US,
    - text: please 
      link:
        text: request a quote.
        url: /contact/request-a-quote
contact:
  form:
    action: https://api.hsforms.com/submissions/v3/integration/submit/5698963/eda833da-394c-4d3c-8a66-c8b854d7ee77
    controls:
      - - name: firstname
          placeholder: i18n-content-contact-_index-contact-form-controls-i_0-i_0-placeholder
          required: true
        - name: lastname
          placeholder: i18n-content-contact-_index-contact-form-controls-i_0-i_1-placeholder
          required: true
      - - name: email
          placeholder: i18n-content-contact-_index-contact-form-controls-i_1-i_0-placeholder
          type: email
          required: true
        - name: phone
          placeholder: i18n-content-contact-_index-contact-form-controls-i_1-i_1-placeholder
          type: tel
          required: true
      - - name: company
          placeholder: i18n-content-contact-_index-contact-form-controls-i_2-i_0-placeholder
          required: true
        - name: jobtitle
          placeholder: i18n-content-contact-_index-contact-form-controls-i_2-i_1-placeholder
      - - name: which_best_describes_your_interest_in_a_vibe_whiteboard_
          placeholder: i18n-content-contact-_index-contact-form-controls-i_3-i_0-placeholder
          dropdown:
            - Learning at Home
            - Education
            - Marketing
            - Professional Services
            - Technology
            - Personal Use & Entertainment
            - General
            - Architecture, Construction, Engineering
      - - name: message
          placeholder: i18n-content-contact-_index-contact-form-controls-i_4-i_0-placeholder
          type: textarea
          required: true
    buttons:
      - type: submit
        title: i18n-content-contact-_index-contact-form-buttons-i_0-title
        class: button is-rounded is-primary
    submitted:
      title: i18n-content-contact-_index-contact-form-submitted-title
      body: i18n-content-contact-_index-contact-form-submitted-body
  support:
    title: i18n-content-contact-_index-contact-support-title
    subtitle: We’re here to help!
    body: i18n-content-contact-_index-contact-support-body
bottom_cta:
  title: i18n-content-contact-_index-bottom_cta-title
  cta:
    title: i18n-content-contact-_index-bottom_cta-cta-title
---
