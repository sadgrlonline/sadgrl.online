---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Using CSS variables"
description: "Learn to use CSS variables"
category: "HTML and CSS"
tags: ["html", "css"]
---

Using variables in CSS can help track certain property values we want to keep the same in multiple different areas. It's especially useful for tracking colors, so we only need to reuse the variable instead of remembering the color code.

We define CSS variables above the other styles, with `:root` at the top of our stylesheet.

CSS variables can be named anything as long as they begin with `--`, do not start with a number, and do not contain spaces.

```css
:root {
  --lavender: #bb81ea;
  --light-green: rgb(153, 197, 160);
}
```

Once they are defined, we can use them where needed by using them inside of `var()`.

```css
strong {
  color: var(--lavender);
}
.panel {
  background-color: var(--light-green);
}
```

When we need to update a color on our page that is used in many places, we only need to update it in one place now.

CSS variables can be used for more than just colors. They can store pretty much any value, but they cannot be used to store `@media` query widths.

```css
:root {
  --border: 1px solid #cccccc;
  --background: url("image.jpg");
}

.container {
  border: var(--border);
  background: var(--background);
}
```
