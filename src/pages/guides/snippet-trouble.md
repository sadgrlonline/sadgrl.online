---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Having trouble with snippets?"
description: "Learn about using JavaScript on your site"
category: "Projects"
tags: ["javascript"]
---

Sometimes, you copy some code from a CodePen and it doesn't work. Here are a few things you can check:

First, make sure you've copied **all** the code from each section and placed it in the correct part of your project. If you're copying from the CSS section, that code should go either:

- inside `<style></style>` tags in your `.html` file, **or**
- directly into a separate `.css` file (without `<style>` tags).

The same goes for JavaScript - if you're copying from the JS section, it belongs either:

- inside `<script></script>` tags in your `.html` file, **or**
- in a separate `.js` file, without the `<script>` tags.

But with JavaScript, there's an extra wrinkle: **timing** matters.

## JavaScript caveats

JavaScript can fail silently if it runs _before_ the page is fully loaded. For example, if your code tries to modify an element that doesn’t exist yet, nothing will happen.

To fix this, wrap your code in a listener that waits for the page to load:

```javascript
document.addEventListener("DOMContentLoaded", function () {
  // paste all of that juicy code here
});
```

Alternatively, if you're using `<script></script>` tags inside of your head to link to an external JS file, you can add `defer` to your script like so:

```html
<script src="../js/script.js" defer></script>
```

This ensures your code will execute once the page has fully loaded.
