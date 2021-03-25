---
title: See Vibe for Yourself
description: Sign up for a video demo of the Vibe board and see how Vibe can elevate your team collaboration, presentations, and training.
stylesPath: css/demo.sass
hero:
  title: i18n-content-demo-_index-hero-title
  body: i18n-content-demo-_index-hero-body
demo:
  expect:
    - title: i18n-content-demo-_index-demo-expect-i_0-title
      items:
        - title: i18n-content-demo-_index-demo-expect-i_0-items-i_0-title
          icon: check-bold
        - title: i18n-content-demo-_index-demo-expect-i_0-items-i_1-title
          icon: check-bold
        - title: i18n-content-demo-_index-demo-expect-i_0-items-i_2-title
          icon: check-bold
        - title: i18n-content-demo-_index-demo-expect-i_0-items-i_3-title
          icon: check-bold
        - title: i18n-content-demo-_index-demo-expect-i_0-items-i_4-title
          icon: check-bold
        - title: i18n-content-demo-_index-demo-expect-i_0-items-i_5-title
          icon: check-bold
  form:
    title: i18n-content-demo-_index-demo-form-title
    action: https://api.hsforms.com/submissions/v3/integration/submit/5698963/1270333f-4cc2-4450-901d-d4f9b29fed58
    controls:
      - - name: firstname
          placeholder: i18n-content-demo-_index-demo-form-controls-i_0-i_0-placeholder
          required: true
        - name: lastname
          placeholder: i18n-content-demo-_index-demo-form-controls-i_0-i_1-placeholder
          required: true
      - - name: email
          placeholder: i18n-content-demo-_index-demo-form-controls-i_1-i_0-placeholder
          type: email
          required: true
        - name: phone
          placeholder: i18n-content-demo-_index-demo-form-controls-i_1-i_1-placeholder
          type: tel
      - - name: company
          placeholder: i18n-content-demo-_index-demo-form-controls-i_2-i_0-placeholder
          required: true
        - name: industry_category
          placeholder: i18n-content-demo-_index-demo-form-controls-i_2-i_1-placeholder
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
          placeholder: i18n-content-demo-_index-demo-form-controls-i_3-i_0-placeholder
          required: true
          dropdown:
            - 1-10
            - 11-100
            - 101-500
            - 501-1000
            - 1001-5000
            - 5001-10000
            - 10001+
        - name: job_role
          placeholder: i18n-content-demo-_index-demo-form-controls-i_3-i_1-placeholder
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
      - - name: anything_else_we_should_know_
          placeholder: i18n-content-demo-_index-demo-form-controls-i_4-i_0-placeholder
          type: textarea
    buttons:
      - type: submit
        title: i18n-content-demo-_index-demo-form-buttons-i_1-title
        class: button is-rounded is-primary is-outlined is-fullwidth
        name: request-video
    submitted:
      body: i18n-content-demo-_index-demo-form-submitted-body
      cta:
        title: Watch Now
        class: is-primary is-video-demo-link
        url: /demo/video-demo
---
