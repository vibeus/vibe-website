---
title: Supported blog post formats
slug: supported-blog-post-formats
author: jiulongw@vibe.us
date: '2099-05-21'
tags:
- random tag
draft: true
isfeatured: false
description: "This is a normal paragraph. This is a heading Normal paragraph again. {{< blog/number-callout \u201C42%\u201D\
  \ >}} This is a called out number. Number is show really big! {{< /blog/number-callout >}} {{< blog/fancy-quote \u201CAuthor\
  \ Name\u201D >}} This is a fancy quote. {{< /blog/fancy-quote >}} This is a normal quote, use word-press own quote block.\
  \ Author, if \u2026 \n\n\n[Continue reading \u201CSupported blog post formats\u201D](https://cms.vibe.dev/?p=758)"
---

This is a normal paragraph.

## This is a heading

Normal paragraph again.

{{< blog/number-callout "42%" >}}

This is a called out number. Number is show really big!

{{< /blog/number-callout >}}

{{< blog/fancy-quote "Author Name" >}}

This is a fancy quote.

{{< /blog/fancy-quote >}}


> This is a normal quote, use word-press own quote block.
> 
> Author, if any

Below are supported in-blog CTAs.

First: cta-1 uses default link that redirects to /lp/interactive-whiteboard/

{{< blog/cta-1 "Vibe Interactive Whiteboard, for Remote Collaboration" >}}

Second: cta-2, with customized redirect link to https://google.com

{{< blog/cta-2 "Vibe Interactive Whiteboard with links to Google" "https://google.com">}}

Third: cta-3, with default link

{{< blog/cta-3 "Vibe Interactive Whiteboard with default link" >}}
