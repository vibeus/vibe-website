---
title: Contact us
description: Have a question about our reseller program? We'd love to hear from you.
layout: contact
stylesPath: css/become-a-reseller.sass
hero:
  title: Become a Vibe Reseller Partner
  body:
    - text: |
        As a Vibe Reseller Partner, your company will resell Vibe products or software, or provide support and professional services. To qualify for our reseller program, please share the following information with us. Once you‘ve submitted the form below, our Business Dev team will reach out with next steps to discover benefits designed for you.
contact:
  form:
    title: Contact Information
    action: https://api.hsforms.com/submissions/v3/integration/submit/5698963/cf217d38-599e-4e02-a2ce-11b8e2ebc742
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
        - name: operating_us_region
          placeholder: Operating US Region*
          multiple: true
          required: true
          dropdown:
            - Nationwide
            - The Northeast
            - The Midwest
            - The South
            - The West
      - - name: company_website
          placeholder: Company Website
      - - name: reseller_type
          placeholder: Reseller Type*
          required: true
          dropdown:
            - Volume-based Reseller
            - Managed Service Provider
            - System Integrator
      - - name: targeted_customer_industries
          placeholder: Targeted Customer Industries*
          multiple: true
          required: true
          sortDropdown: true
          dropdown:
            - Consulting
            - Education
            - Financial Services
            - Government and Public Entities
            - Professional Services
            - Technology
            - Others
      - - name: typical_customer_size
          placeholder: Typical Customer Size*
          required: true
          dropdown:
            - Small-sized Business
            - Small to Medium-sized Business
            - Medium-sized Business
            - Large Enterprise
      - - name: current_opportunity_size
          placeholder: Current Opportunity Size* (Number of Vibe Devices Considered)
          required: true
          dropdown:
            - 1-10
            - 11-20
            - 21-30
            - 31+
      - - name: anything_else_we_should_know_
          placeholder: Any other details to share?
          type: textarea
    buttons:
      - type: submit
        title: Submit
        class: button is-rounded is-primary
    submitted:
      title: Thanks for applying!
      body: Our Business Dev team will reach out to you as soon as we can.
---
