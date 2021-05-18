---
stylesPath: css/enterprise-security.sass
description: With the mission of empowering teams to collaborate, innovate, and ideate in a unified canvas, Vibe is a unique all-in-one device with a customized operating system and cloud backed software. We understand that data security and privacy protection are paramount to our customers. We also understand that even equipped with the state of art cloud security measures including data encryption, Single Sign-On, and forced multi-factor sign in, there are still enterprise customers who have more stringent requirements. This whitepaper outlines the mitigation options we provided for our customers.
title: Vibe Enterprise Security Solutions
aliases: /documents/security/enterprise-security
layout: enterprise-security

hero:
  title: Enterprise Security Solutions
features:
  items:
    - title: Overview
      body:
        - content: |
            With the mission of empowering teams to collaborate, innovate, and ideate in a unified canvas, Vibe is a unique all-in-one device with a customized operating system and cloud backed software. 

            We understand that data security and privacy protection are paramount to our customers. We also understand that even equipped with [the state of art cloud security measures]( https://vibe.us/resources/Vibe_Security_Specs.pdf) including data encryption, Single Sign-On, and forced multi-factor sign in, there are still enterprise customers who have more stringent requirements. This whitepaper outlines the mitigation options we provided for our customers.
    - title: Host Vibe on Guest Network
      body:
        - content: |
            Some companies with security concerns prefer to put Vibe outside their corporate network and in their guest network. In that way, Vibe is treated the same as personal devices such as phones and tablets. This setting will preserve most of the functionalities of Vibe, with the exception of wireless screencasting. To work around this, customers can either use the wired connection (HDMI cable) or [a Vibe hotspot solution](https://knowledge.vibe.us/dual-wi-fi-to-solve-your-screencast-problem).
    - title: Disconnect to Vibe Cloud
      body:
        - content: |
            For companies who have the most stringent security requirements, we provide an option to allow customers to save Vibe canvas software to their own cloud server and disable the option to save on Vibe's cloud. Please refer to the following table for the status of the features in this setting.
        - table:
            - title: Whiteboard Drawing
              value: 'true'
            - title: Save & Reload Whiteboard
              value: 'true'
            - title: Remote Collaboration
              value: 'false'
            - title: Export to PDF
              value: 'true'
            - title: Import Image from Cloud Drive
              value: 'true'
            - title: Import Local PDF & Image Files
              content: Feature Planned March 2021
            - title: Wireless Screencast
              value: 'true'
            - title: Third-Party Apps
              value: 'true'
        - content: |
            In this mode, a popular option is to save the whiteboard as a file in the device or to a cloud storage place of choice, such as Google Drive, One Drive, Dropbox, etc. 

            Customers are still able to show the whiteboard to remote participants by screen sharing using their supported video conferencing apps.
    - title: Offline Mode
      body:
        - content: |
            Companies can also choose to keep Vibe completely disconnected from the internet. In this case, users can utilize the HDMI out port to transport the image of Vibe to the remote participants. Here is the status of the same features in this mode.
        - table:
            - title: Whiteboard Drawing
              value: 'true'
            - title: Save & Reload Whiteboard
              value: 'true'
            - title: Remote Collaboration
              value: 'false'
            - title: Export to PDF
              value: 'true'
            - title: Import Image from Cloud Drive
              value: 'false'
            - title: Import Local PDF & Image Files
              content: Feature Planned March 2021
            - title: Wireless Screencast
              value: 'false'
            - title: Third-Party Apps
              value: 'false'
    - title: Private Deployment
      body:
        - content: |
            Yet still another option is to offer complete control over Vibe implementation, hosted on customers’ own cloud environment. It will provide a full list of the Vibe’s features without compromising security.

            In this instance, Vibe’s engineering team will deploy the Vibe server to the customer’s private AWS instance and will also train its IT team on how to maintain the service. Vibe will periodically deploy patches and updates to the customer at the requested cadence.  Note Vibe will have to charge a deployment fee and yearly subscription.
bottom_cta:
  title: Still have questions?
  cta:
    title: Contact Us
    url: /contact/
---
