---
url: /distance-learning-ebook
title: See Vibe for Yourself
description: The Complete Guide to Distance Learning
stylesPath: css/playbook.sass
playbook:
  figure: img/playbook/distance-learning-ebook.png
  text_content:
    title: Distance Learning Ebook Highlights
    items:
      - title: What is distance learning
        icon: check-bold
      - title: Synchronous and asynchronous learning
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
          placeholder: First Name*
          required: true
        - name: lastname
          placeholder: Last Name*
          required: true
      - - name: email
          placeholder: Work Email*
          type: email
          required: true
      - - name: phone
          placeholder: Phone Number
          type: tel
      - - name: company
          placeholder: Company Name
      - - name: which_best_describes_your_interest_or_need_for_a_vibe_whiteboard_
          placeholder: Which best describes your interest in Vibe*
          required: true
          dropdown:
            - Distance Learning
            - Education
            - Engineering
            - Marketing
            - Professional Services
            - Technology
            - Personal Use/Entertainment
            - General

    buttons:
      - type: submit
        title: Download
        class: button is-rounded is-black is-outlined
        name: request-video
    hidden_values:
        vibe_from_education_landing_page: "true"
    submitted:
      body: '## We’ve sent you an email with the PDF download link. Enjoy!


      Can''t wait? [Read now](/resources/Vibe_education_ebook.pdf).

      '
bottom_cta:
  title: Experience Vibe for yourself
  cta:
    buttons:
      - title: See a Demo
        url: /demo/
        class: is-black
---
