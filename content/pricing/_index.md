---
title: i18n-content-pricing-_index-title
stylesPath: css/pricing.sass
plans: &plans
  - class: starter is-one-third
    title: Starter
    body: Sufficient for home use or startups
    subscription:
      price: 0
      body: Forever, no but, if or hidden tricks
    features:
      list_icon: img/pricing/check-icon.svg
      title: 'Top features:'
      body:
        - Unlimited number of whiteboards
        - Collaborate from anywhere via Vibe Cloud
        - Share boards with anyone via link
        - Import media from Cloud Drives
        - Export to PDF (with watermark)
        - Join a team workspace as a guest
      cta:
        title: Try Now
        class: is-black is-outlined is-rounded
    features_with_vibe:
      list_icon: img/pricing/check-icon.svg
      title: 'Top features:'
      body:
        - Use your Vibe as a central video conferencing system with apps such as Zoom, Team and Google Hangout
        - Present your ideas wirelessly and annotate during your discussion
        - Work in offline mode that guarantees data security 
        - Our robust apps ecosystem let you use apps that you already love
  - class: business is-one-third
    title: Business
    body: More powerful features that empower team productivity
    subscription:
      price: 6.99
      period: mo
      body: Per seat when billed yearly. $7.99 when billed monthly.
    features:
      list_icon: img/pricing/plus-icon.svg
      title: 'All features in starter, plus:'
      body:
        - Data sync from supported cloud drive
        - Anonymous board editors
        - Advanced sharing permissions
        - Team workspace enabled
        - Export boards without watermark
        - Shared team templates
      cta:
        title: Try Free for 14 Days
        class: is-black is-outlined is-rounded
    features_with_vibe:
      list_icon: img/pricing/plus-icon.svg
      title: 'All features in starter, plus:'
      body:
        - Account management for your team
        - Device management and configuration for your team
        - Team Apps
        - Customized Homescreen
  - class: enterprise is-one-third
    title: Enterprise
    body: Solutions tailored toward each unique enterprise
    features:
      list_icon: img/pricing/plus-icon.svg
      title: 'All features in business, plus:'
      body:
        - SSO & SLA
        - Advanced Fleet Management
        - Policy Enroll & Management
        - Bulk Operations
        - Private Cloud Capable
        - Dedicated Customer Support
        - SAML/LDAP Integration
      cta:
        title: Contact Sales
        class: is-black is-outlined is-rounded
    features_with_vibe:
      list_icon: img/pricing/plus-icon.svg
      title: 'All features in business, plus:'
      body:
        - ChromiumOS based OS
        - TPM Chip
        - Fully Centralized Device Management Support
        - Bi-Monthly Security Updates
        - Malware injection
add_on_plans: &add_on_plans
  - class: distance-learning
    title: Distance Learning with Instruct Boards
    subscription:
      price: 12.99
      period: mo
      body: Per seat, per month. Free to students.
    cta:
      title: Try Free for 14 Days
      class: is-black is-outlined is-rounded
    features:
      list_icon: img/pricing/check-icon.svg
      title: 'Top features:'
      body:
        - Unlimited instruct boards with automatic assignments propagation
        - Manage class effectively with students boards gallery view
        - Create breakout groups to enable small team collaboration
        - Facilitate discussions with anonymous presentations 
        - Build a learning community with published boards options
        - Access to Vibe education templates store to upload or download templates made by other educators
        - Extra 10GB of cloud storage
      cta:
        title: Learn more

hero:
  title: Choose the plan that’s right for your team
  body: Pay by month or the year, and cancel at any time.
  plans: *plans
features:
  plans: *plans
vibe_ad:
  figure: img/pricing/vibe-ad.png
  background: img/common/outline-logo.svg
  title:
    text: 'Many features available when combined with a '
    link:
      text: 'Vibe Board, starting from $2999'
      url: /hardware
  cta:
    link:
      class: show-or-hide
      target: &features_with_vibe_id features-with-vibe
      to_show: Learn more
      to_hide: Hide detail
      icon: 
        class: hidden-detail-icon
        text: '↓'
features_with_vibe:
  id: *features_with_vibe_id
  plans: *plans
add_ons:
  class: is-hidden
  title: Available add-ons
  add_on_plans: *add_on_plans
comparison:
  id: &comparison_id comparison
  cta:
    title: See plans comparison detail
    link:
      class: toggle-comparison
      target: *comparison_id
      icon: 
        class: chevron-icon
        mdi_icon: chevron-down:24
faq:
  title: i18n-content-pricing-_index-faq-title
  items:
    - title: i18n-content-pricing-_index-faq-items-i_0-title
      body: i18n-content-pricing-_index-faq-items-i_0-body
    - title: i18n-content-pricing-_index-faq-items-i_1-title
      body: i18n-content-pricing-_index-faq-items-i_1-body
    - title: i18n-content-pricing-_index-faq-items-i_2-title
      body: i18n-content-pricing-_index-faq-items-i_2-body
    - title: i18n-content-pricing-_index-faq-items-i_3-title
      body: i18n-content-pricing-_index-faq-items-i_3-body
    - title: i18n-content-pricing-_index-faq-items-i_4-title
      body: i18n-content-pricing-_index-faq-items-i_4-body
    - title: i18n-content-pricing-_index-faq-items-i_5-title
      body: i18n-content-pricing-_index-faq-items-i_5-body
    - title: i18n-content-pricing-_index-faq-items-i_6-title
      body: i18n-content-pricing-_index-faq-items-i_6-body
    - title: i18n-content-pricing-_index-faq-items-i_7-title
      body: i18n-content-pricing-_index-faq-items-i_7-body
---