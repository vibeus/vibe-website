---
url: /distance-learning-ebook
title: See Vibe for Yourself
description: Sign up for a video demo of the Vibe board and see how Vibe can elevate your team collaboration, presentations, and training.
stylesPath: css/playbook.sass
layout: distance-learning-ebook
playbook:
  figure: img/playbook/distance-learning-ebook.png
  expect:
    - title: Distance Learning Ebook Highlights
      items:
        - title: What is distance learning
          icon: check-bold
        - title: Synchronous and Asynchronous learning
          icon: check-bold
        - title: Types of distance learning ecosystem
          icon: check-bold
        - title: Why distance learning is made simple with Vibe
          icon: check-bold


  form:
    title: Get the complete guide for distance learning
    action: https://api.hsforms.com/submissions/v3/integration/submit/5698963/e58576d6-a3f7-4067-b961-0afeaa0d38ab
    controls:
      - - name: firstname
          placeholder: i18n-content-demo-_index-demo-form-controls-i_0-i_0-placeholder
          required: true
        - name: lastname
          placeholder: i18n-content-demo-_index-demo-form-controls-i_0-i_1-placeholder
          required: true
      - - name: email
          placeholder: Work Email
          type: email
          required: true
      - - name: phone
          placeholder: i18n-content-demo-_index-demo-form-controls-i_1-i_1-placeholder
          type: tel
      - - name: company
          placeholder: i18n-content-demo-_index-demo-form-controls-i_2-i_0-placeholder
      # - - name: which_best_describes_your_interest_in_a_vibe_whiteboard_
      #     placeholder: i18n-content-demo-_index-demo-form-controls-i_3-i_0-placeholder
      #     dropdown:
      #       - Learning at Home
      #       - Education
      #       - Marketing
      #       - Professional Services
      #       - Technology
      #       - Personal Use & Entertainment
      #       - General
      #       - Architecture, Construction, Engineering

    buttons:
      - type: submit
        title: Download
        class: button is-rounded is-black is-outlined
        name: request-video
    hidden_values:
        vibe_from_education_landing_page: "true"
    submitted:
      body: '## We’ve sent you an email with the PDF download link. Enjoy!


      Can''t wait? [Read now](/resources/Vibe_education_ebook.pdf/).

      '
bottom_cta:
  title: Experience Vibe for yourself
  cta:
    buttons:
      - title: See a Demo
        url: /demo/
        class: is-black
---
