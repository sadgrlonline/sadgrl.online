---
layout: ../../layouts/MarkdownPostLayout.astro
title: "The HTML Skeleton"
description: "Learn about boilerplate HTML"
category: "HTML and CSS"
tags: ["html"]
---

The HTML skeleton refers to the basic structure of an HTML page.

At its very basic, it might look something like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My title here!</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <p>My content here!</p>
  </body>
</html>
```

`<!DOCTYPE html>` tells the browser reading it that it is an HTML file. While a site missing this part will still work, it can trigger some strange behavior in how the browser displays the site.

Then comes the opening `<html lang="en">` tag. The "en" specifies that my webpage is in english.

The next area is the `<head></head>` section. Inside of here are two basic meta tags recommended for every site. `<meta charset="UTF-8">` is important to display certain special characters, like ♥ in certain browsers. The other meta tag assists in displaying your website properly (sort of) on mobile.

The `<title></title>` tag is the text that shows up in the tab of a browser.

The `<link></link>` tag links to your external stylesheet, if you have one.

Last comes the final and most important section, the `<body></body>` tag. This is where the bulk of your site will go, more HTML tags. Everything is wrapped up with `</html>`.

This is only the very basis of a webpage and is meant to be built upon, like a foundation.
