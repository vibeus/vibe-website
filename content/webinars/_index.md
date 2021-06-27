---
title: webinars
stylesPath: css/webinars.sass
hero:
  title: i18n-content-webinars-_index-hero-title
  body: i18n-content-webinars-_index-hero-body
webinars:
  speaker:
    title: i18n-content-webinars-_index-webinars-speaker-title
    figure: img/webinars/speaker.png
    body: i18n-content-webinars-_index-webinars-speaker-body
  agenda:
    title: i18n-content-webinars-_index-webinars-agenda-title
    items:
      - item: |
          + What is Vibe?
          + Vibe Canvas software
          + Third-party applications
          + Present and Annotate
      - item: |
          - FAQs
          - Pricing and how to buy 
          - 10-15 minute Q&A
  time:
    title: i18n-content-webinars-_index-webinars-time-title
    body: i18n-content-webinars-_index-webinars-time-body
  form:
    title: i18n-content-webinars-_index-webinars-form-title
    action: https://api.hsforms.com/submissions/v3/integration/submit/5698963/3d6ae527-ade1-410d-91e7-c2f576b231f5
    controls:
      - - name: firstname
          placeholder: i18n-content-webinars-_index-webinars-form-controls-i_0-i_0-placeholder
          required: true
        - name: lastname
          placeholder: i18n-content-webinars-_index-webinars-form-controls-i_0-i_1-placeholder
          required: true
      - - name: email
          placeholder: i18n-content-webinars-_index-webinars-form-controls-i_1-i_0-placeholder
          type: email
          required: true
      - - name: industry_category
          placeholder: i18n-content-webinars-_index-webinars-form-controls-i_2-i_0-placeholder
          required: true
          sortDropdown: true
          dropdown:
            - Arts and Design
            - Architecture and Construction
            - Coaching and Training
            - Consulting
            - Education
            - Engineering
            - Financial Services
            - Government and Organizations
            - Health Care
            - IT Services
            - Legal
            - Manufacturing
            - Marketing and Advertising
            - Real Estate
            - Retail and Consumer Goods
            - Technology
            - Others
      - - name: use_case
          placeholder: i18n-content-webinars-_index-webinars-form-controls-i_3-i_0-placeholder
          required: true
          dropdown:
            - Remote collaboration
            - Presentation
            - Project management
    buttons:
      - type: submit
        title: Submit
        class: button is-rounded is-primary is-outlined watch-demo is-fullwidth
        column_class: is-hidden-eu
        name: request-webinars
    submitted:
      choices:
        - class: is-live-demo
          body: |
            # We’ve sent you an email with a link to schedule your demo. Talk to you soon!
          cta:
            title: Watch Demo Video First
            target: _blank
            class: is-primary is-video-demo-link
            url: https://vibe.us/demo/video-demo/
---
