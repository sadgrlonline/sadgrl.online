---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Creating text columns"
description: "Learn to create and style text columns"
category: "HTML and CSS"
tags: ["html", "css"]
---

Creating nice, even columns of text with CSS is easy.

<div class="columns-demo demo">
    <p>Scream for no reason at 4 am sweet beast, be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day and love you, then bite you love me! Hiss and stare at nothing then run suddenly away. Making sure that fluff gets into the owner's eyes intently stare at the same spot why can't i catch that stupid red dot kitty poochy.</p>
</div>

<style>
.columns-demo {
    columns: 2;
}

.columns-demo p {
    margin-top: 0;
}
</style>

First, create an element of text:

```html
<div class="columns">
  <p>My text here...</p>
</div>
```

Then, you can apply the `columns` CSS property. You can adjust the number of columns as needed.

```css
.columns {
  columns: 2;
  padding: 15px; /* adds padding between the text and the border */
}
/* this is extra */
.columns p {
  margin-top: 0;
}
```

> ✏️ **Tip**
>
> Since `<p></p>` elements have a little bit of margin at the top, I added a rule to remove that so the columns would be even.

You can adjust the space between your columns with `column-gap`:

```css
.columns {
  columns: 2;
  padding: 15px;
  column-gap: 50px;
}
```

 <div class="columns-demo-2 demo">
    <p>Scream for no reason at 4 am sweet beast, be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day and love you, then bite you love me! Hiss and stare at nothing then run suddenly away. Making sure that fluff gets into the owner's eyes intently stare at the same spot why can't i catch that stupid red dot kitty poochy.</p>
</div>
<style>
.columns-demo-2 {
    columns: 2;
    column-gap: 40px;
}
.columns-demo-2 > p {
    margin-top: 0;
}
</style>

You can also add a border or `rule` between your columns to visually separate them.

```css
.columns {
  columns: 2;
  padding: 15px;
  column-rule: 1px solid gray;
}
```

 <div class="columns-demo-3 demo">
    <p>Scream for no reason at 4 am sweet beast, be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day and love you, then bite you love me! Hiss and stare at nothing then run suddenly away. Making sure that fluff gets into the owner's eyes intently stare at the same spot why can't i catch that stupid red dot kitty poochy.</p>
</div>

<style>
.columns-demo-3 {
    columns: 2;
    column-rule: 1px solid gray;
}

.columns-demo-3>p {
    margin-top: 0;
}
.demo {
    border:1px dotted var(--white);
    padding:15px;
}
</style>
