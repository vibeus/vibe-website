---
title: Sign up for a live demo
stylesPath: css/demo.sass

hero:
  title: Sign up for a live demo
  body: |
    ## Why do you need a demo?

    Before purchasing a Vibe board, many customers find it helpful to schedule a live 30 minute customized product
    demo with our team to see Vibe in action.

demo:
  expect:
    - title: What you can expect from a live demo
      items:
        - title: |
            Live demos are conducted via Zoom video conference and you are welcome to invite your teammates
            (and we are also happy to record the demo - just ask!)
          icon: check-bold
        - title: |
            Discuss your goals and requirements for a new device, current applications you're looking to use with Vibe,
            and any other questions
          icon: check-bold
        - title: |
            The demo will cover whiteboarding features, saving & sharing, screencasting options, and 3rd party
            applications, followed by Q&A
          icon: check-bold
    - title: What you can expect from the Demo Video
      items:
        - title: 6 minute general overview of Vibe's features
          icon: check-bold
  form:
    title: Tell us more about you
    action: 'https://api.hsforms.com/submissions/v3/integration/submit/5698963/1270333f-4cc2-4450-901d-d4f9b29fed58'
    controls:
      - - name: firstname
          placeholder: First Name
          required: true
        - name: lastname
          placeholder: Last Name
          required: true
      - - name: email
          placeholder: Email Address
          type: email
          required: true
      - - name: company
          placeholder: Company Name
      - - name: anything_else_we_should_know_
          placeholder: Anything else we should know?
          type: textarea
    buttons:
      - type: submit
        title: Schedule a Live Demo
        class: button is-rounded is-primary is-fullwidth
        name: request-demo
      - type: submit
        title: Watch Demo Video
        class: button is-rounded is-primary is-outlined is-fullwidth
        name: request-video
    submitted:
      body: We’ve sent you an email with the video link. Enjoy!
---
