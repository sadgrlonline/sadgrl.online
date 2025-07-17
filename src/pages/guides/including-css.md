---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Including CSS on your website"
description: "Learn how to include CSS on your website"
category: "HTML and CSS"
tags: ["html", "css"]
---

**CSS** stands for **C**ascading **S**tyle **S**heets.

The word **cascading** is actually quite important when it comes to working with CSS, especially when troubleshooting why things may not be working the way we might expect.

For example, if we write this code:

```css
p {
  color: blue;
  color: purple;
}
```

The `<p></p>` elements will appear purple, because setting identical properties with different values on an element will overwrite whatever came before.

Chances are, you probably already knew this - but did you know that _how_ you use CSS will determine which parts of CSS overwrite others?

There are three different ways you can include CSS on your website. There are a few things to know about how this impacts the behavior of the CSS.

## In an external stylesheet

Linking to a stylesheet externally makes it easy to use the same stylesheet across multiple pages. When linking to a stylesheet externally, you do not need `<style></style>` tags.

This code always goes inside of your `<head></head>` tags on the HTML file you'd like to include the stylesheet on.

```html
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
```

> ✏️ **Tip**
>
> Not sure how to link to your stylesheet? Check out [Using absolute and relative links](/guides/links).

## In your HTML file

You can put CSS between `<style></style>` tags on a particular webpage. These styles will only apply to elements on that page.

```html
<style>
  .body {
    background-color: black;
    color: white;
  }
</style>
```

If you're styling the same elements here that you've styled in an external stylesheet, the styles between these tags will overwrite them - on this page only. This is assuming that your `<style></style>` tags appear on that webpage somewhere after the `<link rel="stylesheet" href="styles.css">` tag.

## Inline

When CSS is written inside of your HTML tags, it's considered **inline**.

```html
<div style="color:red; background-color:black; padding:10px;">
  Welcome to my website!
</div>
```

This CSS only applies to the element (in this case, a div) that you used it on. Any inline CSS will overwrite any identical styles included elsewhere in the file or external stylesheet, but only on the element you're using the inline CSS on.
