---
url: /remote-collaboration-ebook

title: See Vibe for Yourself
description: Sign up for a video demo of the Vibe board and see how Vibe can elevate your team collaboration, presentations, and training.
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
