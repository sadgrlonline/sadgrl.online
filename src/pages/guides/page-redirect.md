---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Create a page redirect"
description: "Learn to create a page redirect"
category: "Neocities"
tags: ["html"]
---

A redirect is a piece of code which, upon visiting one page, takes you to a different page automatically.

There are two main reasons you might want to set up a redirect:

- To redirect a page after changing the URL (so existing links to the old URL don’t break)
- To create an ‘easy’ link to an outside profile (like setting yourwebsite.com/spacehey to redirect to your SpaceHey profile)

To implement a redirect, you need to place a snippet of code inside of your `<head></head>` tags:

```html
<meta http-equiv="refresh" content="0; url='/about/'" />
```

If the above code were put into `/about.html`, then when users visit that page, they will be redirected to `https://yoursite.neocities.org/about/`.

You can change the `content="0"` value to determine how long until the page redirects (in seconds). `0` indicates an immediate redirect.

> ✏️ **Tip**
>
> The `url=''` value can be an absolute or relative link.
