---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Creating and styling lists"
description: "Learn to create and style lists"
category: "HTML and CSS"
tags: ["html", "css"]
---

There are two main types of lists, ordered (numbered) and unordered (bulleted).

Here is an ordered list:

1. tuna
2. salmon
3. crab
4. yellowtail

We create this in HTML like so:

```html
<ol>
  <li>tuna</li>
  <li>salmon</li>
  <li>crab</li>
  <li>yellowtail</li>
</ol>
```

Here is an unordered list:

- tuna
- salmon
- crab
- yellowtail

It is created like this:

```html
<ul>
  <li>tuna</li>
  <li>salmon</li>
  <li>crab</li>
  <li>yellowtail</li>
</ul>
```

We define the list with either `<ul></ul>` or `<ol></ol>` tags depending on the type of list we want. Then, each list item is represented by `<li></li>`.

## Nesting lists

You can nest a list inside of another list to designate a sub-list.

- sushi
  - california roll
  - spicy salmon roll
- french fries
  - crinkle-cut
  - curly

```html
<ul>
  <li>sushi</li>
  <ul>
    <li>california roll</li>
    <li>spicy salmon roll</li>
  </ul>
  <li>french fries</li>
  <ul>
    <li>crinkle-cut</li>
    <li>curly</li>
  </ul>
</ul>
```

It's possible to nest them in many different ways. You can put an ordered list
inside of an unordered list, and vice versa.

## Styling lists

You can customize lists pretty extensively with CSS.

To display a list with no bullets, you must apply this property to the `ul` element:

```css
list-style: none;
```

You can also use CSS to set a custom emoji or symbol as the bullet.

<ul class="custom">
    <li>tuna</li>
    <li>salmon</li>
    <li>crab</li>
    <li>yellowtail</li>
</ul>
<style>
    .custom {
        list-style: "🌙 ";
        margin-right: 5px;
    }
</style>

```css
list-style: "\1F319 "; /* unicode */
list-style: "🌙 "; /* directly pasted */
```

Both of the above examples have the same effect, but the first uses the unicode codepoint. This works because we're using an emoji, and every emoji is defined in the Unicode Standard, which assigns a unique code to represent it. Using the unicode value with CSS is preferred due to how browsers handle the display of emojis.

You can find a list of emojis and their respective unicode codepoints on [emojipedia](https://emojipedia.org). Once you're viewing an emoji, select the **Technical Information** tab and look for the **Codepoints** value.

> ✏️ **Tip**
>
> The Unicode codepoints you'll find online will look like `U+1F319`. To translate that to a web-safe CSS value, you can replace the `U+` with a backslash `/` so `U+1F319` becomes `\1F319`.

You can also use an image as bullet points if you'd like:

```css
list-style: url("image.jpg");
```

> ✏️ **Tip**
>
> Not sure how to link to an image? Check out [Using absolute and relative links](/guides/links).

<ul class="image">
    <li>tuna</li>
    <li>salmon</li>
    <li>crab</li>
    <li>yellowtail</li>
</ul>

 <style>
.image {
    list-style: url('https://sadhost.neocities.org/images/learn/blueheartbounce.gif');
}
</style>
