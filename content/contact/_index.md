---
title: Contact us
stylesPath: css/contact.sass

hero:
  title: Contact us
  body: Send us a message and we will get back to you as soon as we can.

contact:
  form:
    action: 'https://api.hsforms.com/submissions/v3/integration/submit/5698963/eda833da-394c-4d3c-8a66-c8b854d7ee77'
    controls:
      - - name: firstname
          placeholder: First Name
          required: true
        - name: lastname
          placeholder: Last Name
          required: true
      - - name: email
          placeholder: Work Email
          type: email
          required: true
        - name: phone
          placeholder: Phone Number
          type: tel
          required: true
      - - name: company
          placeholder: Company Name
          required: true
        - name: jobtitle
          placeholder: Job Title
          dropdown:
            - Executive
            - Financial services
            - IT
            - Engineer
            - Marketing
            - Sales
            - Trainer
            - Project manager
            - UI/UX designer
            - Lawyer
            - Teacher
            - Government
            - Health
            - Sports
      - - name: message
          placeholder: Message
          type: textarea
          required: true
    buttons:
      - type: submit
        title: Submit
        class: button is-rounded is-primary
    submitted:
      title: Thanks!
      body: We will get back to you as soon as we can.
  support:
    title: We’re here to help!
    body: If you have technical issues, please [contact support](mailto:support@vibe.us).

bottom_cta:
  title: Experience Vibe for yourself
  cta:
    title: See a Demo
---
