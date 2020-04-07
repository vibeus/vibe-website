---
stylesPath: css/demo.sass

hero:
  title: Sign up for a live demo
  body: |
    ## Why do you need a demo?

    Vibe offers a 30 minute product demo tailored to your needs. Before purchasing a Vibe board, many customers
    find it helpful to schedule a 30 minute 1:1 product demo of Vibe with our sales team.

demo:
  expect:
    title: 'What you can expect:'
    items:
      - title: Discuss your goals for a new device, current applications you would like to integrate followed by Q&A.
        icon: check-bold
      - title: Join the Zoom meeting through the Vibe board and share the board's screen to see it in action.
        icon: check-bold
      - title: Take you through the whiteboarding features & toolbar, screencasting options, and 3rd party applications.
        icon: check-bold
  how:
    title: How does the live demo work?
    body: |
      Demos are done remotely through a Zoom video conference, and you are welcome to invite as many people
      on your team as you'd like.

  form:
    title: Help us to prepare better for your live demo
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
      - - name: jobtitle
          placeholder: Job Title
          dropdown:
            - Title 1
            - Title 2
            - Title 3
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
