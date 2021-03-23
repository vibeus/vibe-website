---
url: /remote-collaboration-ebook

title: See Vibe for Yourself
description: The Complete Guide to Remote Collaboration
stylesPath: css/playbook.sass
playbook:
  figure: img/playbook/remote-work-playbook.png
  text_content:
    title: Remote Work Playbook Highlights
    items:
      - title: Current situation and future predictions of remote work
        icon: check-bold
      - title: How to build trusted relationships with your remote team
        icon: check-bold
      - title: How to collaborate across different time zones
        icon: check-bold
      - title: List of a remote ready full tech stack
        icon: check-bold
      - title: How Vibe can help remote collaboration
        icon: check-bold

  form:
    title: Get your team prepared for remote working
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
      - - name: company_size_classification
          placeholder: Company Size
          dropdown:
            - 1-10
            - 11-100
            - 101-500
            - 501-1000
            - 1001-5000
            - 5001-10000
            - 10000+
      - - name: industry_category
          placeholder: Industry
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
      - - name: job_role
          placeholder: Role
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

    buttons:
      - type: submit
        title: Download
        class: button is-rounded is-black is-outlined
        name: request-video
    hidden_values:
        vibe_from_education_landing_page: "false"
    submitted:
      body: '## We’ve sent you an email with the PDF download link. Enjoy!


      Can''t wait? [Read now](/resources/Vibe_remote_work_playbook.pdf).

      '
bottom_cta:
  title: Experience Vibe for yourself
  cta:
    buttons:
      - title: See a Demo
        url: /demo/
        class: is-black
---
