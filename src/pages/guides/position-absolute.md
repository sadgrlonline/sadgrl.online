---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Understanding position:absolute"
description: "Learn to use absolute positioning"
category: "HTML and CSS"
tags: ["html", "css"]
---

Using `position:absolute;` allows us great flexibility with placing items on the page. Armed with the knowledge of how this works, you can effectively place anything anywhere on the screen.

## About position:absolute

When you assign an element `position:absolute;` you are removing this element from the "flow" of the page. This means the element ignores all of the other stuff on the page and goes exactly where you tell it to go.

> ✏️ **Tip**
>
> If you're going for exact placement of elements, I highly recommend working in a CodePen or another environment where you can see your code update automatically as you write it. This will be a huge help in tweaking things to be exact.

It can get a little unwieldy to do things this way, because the entire webpage is essentially your canvas. Here is an example. I have placed a cat emoji at the top of this page, with the following styles:

```css
.cat {
  position: absolute;
  top: 20px;
  left: 20px;
}
```

<div style="position:absolute; top:20px; left:20px;">🐈</div>

This code tells the element to display 20 pixels from the top of the page and 20 pixels from the left of the page.

> ✏️ **Tip**
> When using `top`, `right`, `left`, and `bottom`, the value `0` represents the very edge of the area. So `right: 0;` would be up against the right edge, while `bottom: 0;` would be right against the bottom edge.

It's not bad, but if I wanted it in a very specific position, I'd have to take the entire page into account when calculating the pixel values. Things can get messy, especially when you consider that viewports come in so many different sizes nowadays.

Instead of using the entire page as your "canvas", you can designate an outer element - like a div - as the canvas for your absolutely positioned items.

In the example below, both the heart and the globe images are positioned absolutely at `top:10px;` and `right:10px;`. The difference is that the heart image is inside of a container with `position:relative;`

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="ExbPmjO" data-pen-title="Position Anything Anywhere - 1.5 (Container)" data-user="sadness97" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/sadness97/pen/ExbPmjO">
  Position Anything Anywhere - 1.5 (Container)</a> by Sadness (<a href="https://codepen.io/sadness97">@sadness97</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

Once you are working inside of a relative element, the `top`, `left`, `bottom` and `right` values will be relative to that container.

In the below example, I assigned classes to each image so I can use those to style them. If you're just using this technique on one page, it may save you time to add the styles inline.

Once you have all of your images on the page, you can start to assign each one position values (`top`, `left`, `right` and `bottom`). In my experience it's usually easiest to keep things consistent by sticking to either top and left and right and bottom positioning. Mixing them all together might make things confusing.

Here is an example of custom positioning of the images:

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="xxPZddN" data-pen-title="Position Anything Anywhere - 3 (Position Items)" data-user="sadness97" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/sadness97/pen/xxPZddN">
  Position Anything Anywhere - 3 (Position Items)</a> by Sadness (<a href="https://codepen.io/sadness97">@sadness97</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

## Defying boundaries

If you use a relatively positioned container, you can bring your items outside of the container - with negative margins.

This can create some very cool effects, like graphics 'sitting' on top of certain elements.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="RwjrVJG" data-pen-title="Position Anything Anywhere - 4 (Defy Boundaries!!)" data-user="sadness97" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/sadness97/pen/RwjrVJG">
  Position Anything Anywhere - 4 (Defy Boundaries!!)</a> by Sadness (<a href="https://codepen.io/sadness97">@sadness97</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>
