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
        title: i18n-content-webinars-_index-webinars-form-buttons-i_0-title
        class: button is-rounded is-primary schedule-webinars is-fullwidth
        column_class: is-hidden-eu
        name: request-webinars
        target_action: 'https://api.hsforms.com/submissions/v3/integration/submit/5698963/f46de797-344a-4c92-b0d3-3555e229394f'
    submitted:
      choices:
        - class: is-live-webinars
          body: |
            # We’ve sent you an email with a link to schedule your webinars. Talk to you soon!
          cta:
            title: Watch webinars Video First
            target: _blank
            class: is-primary is-video-webinars-link
            url: https://vibe.us/webinars/video-webinars/
        - class: is-video-webinars
          body: |
            # We've sent you an email with the video link. Enjoy!
          cta:
            title: Watch Now
            target: _blank
            class: is-primary is-video-webinars-link
            url: https://vibe.us/webinars/video-webinars/
            subcta:
              class: is-hidden-eu
              body: Still want to talk to an expert?
              link:
                class: is-live-webinars-meeting-link
                body: Schedule a live webinars
                url: https://meetings.hubspot.com/jian-zhao/vibe-follow-up
        - class: is-contact-sales
          body: |
            # Thanks!

            We will get back to you as soon as we can.
          cta:
            title: Watch webinars Video Now
            target: _blank
            class: is-primary is-video-webinars-link
            url: https://vibe.us/webinars/video-webinars/
---
