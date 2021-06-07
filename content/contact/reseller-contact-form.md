---
title: Contact us
description: Have a question about our reseller program? We'd love to hear from you.
layout: contact
stylesPath: css/contact.sass
hero:
  title: Contact Sales
  body:
    - text: Have a question about our reseller program? We'd love to hear from you.
    - class: spacing-block
    - text: If you wish to become an authorized Vibe reseller,
    - text: please
      link:
        text: fill in this form.
        url: /contact/become-a-reseller-partner/
contact:
  form:
    action: https://api.hsforms.com/submissions/v3/integration/submit/5698963/0a3da285-bc2b-41b3-9cc2-e5861643fb30
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
        - name: phone
          placeholder: Phone Number*
          type: tel
          required: true
      - - name: company
          placeholder: Company Name*
          required: true
        - name: industry_category
          placeholder: Industry*
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
      - - name: company_size_classification
          placeholder: Company Size*
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
          placeholder: Role*
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
      - - name: company_website
          placeholder: Company Website
      - - name: anything_else_we_should_know_
          placeholder: Message*
          type: textarea
          required: true
    buttons:
      - type: submit
        title: Submit
        class: button is-rounded is-primary
    submitted:
      title: Thanks!
      body: We will get back to you as soon as we can.
---
