---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Display a thumbnail image when sharing your site"
description: "Learn to add a thumbnail image when sharing your site"
category: "HTML and CSS"
tags: ["html", "css"]
---

Sometimes when a link is shared on platforms like Twitter or Discord, an image will display as part of the preview for the website.

These can be set (manually) on static webpages, using `<meta></meta>` tags.

1. First, upload the image that you'd like to appear. Usually it's a screenshot of the site itself, but it can also be something else.
2. Then, on each page you'd like a preview to appear, place these tags between your `<head></head>` tags. In the first tag, replace the URL with the URL of your image.

```html
<meta property="og:image" content="https://site.com/screenshot.png" />
<meta property="twitter:card" content="summary_large_image" />
```

3. After making the change and saving the file, wait a few minutes and then you can try out a preview. [This website can help you preview it](https://threadcreator.com/tools/twitter-card-validator).

> ✏️ **Tip**
>
> If you test the preview in Discord, it will cache (remember for a long time) the first version it sees. If you decide to change it, the preview won't update this. You can force it to reload a fresh version of your thumbnail by adding a `?` at the end, followed by random letters/numbers. Like this: `https://website.com/?123`
