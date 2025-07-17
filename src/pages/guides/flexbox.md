---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Using flexbox"
description: "Learn to use flexbox"
category: "HTML and CSS"
tags: ["html", "css"]
---

Flexbox is easily one of the most helpful bits of CSS I've ever learned. You can think of it as a tool to help you group divs together side-by-side.

Here are two 25px divs, without flexbox:

<div class="demo">
<div class="no-flex">
    <div></div>
    <div></div>
</div>
</div>
<style>
.no-flex {
    width: 100%;
}
.no-flex>div {
height: 100px;
width: 100px;
border: 1px solid var(--white);
}
</style>

```html
<div class="flex">
  <div class="item"></div>
  <div class="item"></div>
</div>
```

In order to apply flexbox, we need to wrap both of those divs in another div. That "container" will be the element we apply flexbox to. Throughout this article, we will be applying styles to this container, not the flex items themselves.

So let's add our CSS to the container:

```css
.flex {
  display: flex;
}
```

  <div class="demo">
<div class="flex-d">
    <div></div>
    <div></div>
</div>
</div>
<style>
.flex-d {
    display: flex;
}
.flex-d>div {
    height: 100px;
    width: 100px;
    border: 1px solid var(--white);
}
</style>

Now our `div`s are side-by-side - this is the glory of flexbox!

## Flex wrapping

If we have too many items and not enough space on the page, extra flex items will either run off of the page, or look very squished, like this:

<div class="demo">
    <div class="flex-d">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>

> ✏️ **Tip**
>
> Whether your flex items run off of the page or become squished depends on whether your items are inside of a container with a fixed width. If there's no fixed-width on the container, they will run off the page.

We can fix this by setting our flex container to `wrap`. This tells the flex items to automatically
"wrap" onto the next line if there isn't enough space to fit.

 <div class="demo">
    <div class="flex-d wrap">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>

</div>
<style>
    .wrap {
        flex-wrap: wrap;
    }
</style>

## Flex alignment

In the above example, our divs have a static width and are further constrained by this page's layout, there's some space left over on the right.

We can use `justify-content` on our flex container to determine how our flex items are spread out.

For example, here's `justify-content:space-between`:

 <div class="demo">
    <div class="flex-d wrap" style="justify-content:space-between">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>

As you can see, the squares on the top row are spaced differently from the squares on the bottom. This happens because `justify-content: space-between` distributes the available space between the flex items by calculating the total width of the items and spreading the remaining space evenly between them. There’s no space added before the first item or after the last - just between the items themselves - so the result depends on how many items fit in a single row.

Here's how `justify-content:center` looks with those same divs:

 <div class="demo">
    <div class="flex-d wrap" style="justify-content:center">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>

## Flex gap

You can add space between flex items with `row-gap`, `column-gap` or the shorthand `gap` (which applies to both rows and columns).

The `gap` property refers to space between flexbox rows and columns.

Let's return to our earlier demo and add `gap: 10px;`so that our flex items can breathe. This adds `10px` of space between each row and column.

 <div class="demo">
    <div class="flex-d wrap" style="gap:10px;">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
         <div></div>
        <div></div>
    </div>

</div>

Now you know enough to make a nice-looking image gallery!

## Flex order

Changing the flex order can come in handy when you're designing mobile-friendly layouts.

For example, take a look at the demo below. Click and drag the bottom right corner to resize the demo. As the screen space narrows, a `@media` query kicks in and the layout flexes. Since the sidebar comes first in the HTML, it displays on top and takes up a lot of space on small screens.

<div class="resizeMe">
  <iframe
    style="width: 100%; height: 300px; border: none;"
    srcdoc='
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            margin: 0;
            font-family: sans-serif;
            height:100%;
          }
          .demo-container {
            display: flex;
            width: 100%;
            height: 100%;
          }
          .demo-sidebar {
            width: 100px;
            height:300px;
            background: #f0f0f0;
          }
          .demo-main {
            flex: 1;
            padding: 20px;
            font-size: 10px;
            color:white;
          }
           @media only screen and (max-width: 250px) {
            .demo-container {
              flex-wrap:wrap;
            }
            .demo-sidebar {
              width:100%; 
              height:130px;
            }
           }
        </style>
      </head>
      <body>
        <div class="demo-container">
          <div class="demo-sidebar"></div>
          <div class="demo-main">
            <p>This is a layout demo inside an iframe.</p>
          </div>
        </div>
      </body>
      </html>'
  ></iframe>
</div>

<style>
  .resizeMe {
    resize: horizontal;
    overflow: auto;
    width: 400px;
    max-width: 100%;
    height: 300px;
    border: 1px solid #ccc;
  }

  .resizeMe > iframe {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>

With flexbox, you can change the order in which flex items appear.

```css
.sidebar {
  order: 2;
}
.content {
  order: 1;
}
```

Try resizing this new version, which uses `order`.

<div class="resizeMe">
  <iframe
    style="width: 100%; height: 300px; border: none;"
    srcdoc='
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            margin: 0;
            font-family: sans-serif;
            height:100%;
          }
          .demo-container {
            display: flex;
            width: 100%;
            height: 100%;
          }
          .demo-sidebar {
            width: 100px;
            height:300px;
            background: #f0f0f0;
          }
          .demo-main {
            flex: 1;
            padding: 20px;
            font-size: 10px;
            color:white;
            height:150px;
          }
           @media only screen and (max-width: 250px) {
            .demo-container {
              flex-wrap:wrap;
              order:1;
            }
            .demo-sidebar {
              width:100%; 
              height:130px;
              order:2;
            }
           }
        </style>
      </head>
      <body>
        <div class="demo-container">
          <div class="demo-sidebar"></div>
          <div class="demo-main">
            <p>This is a layout demo inside an iframe.</p>
          </div>
        </div>
      </body>
      </html>'
  ></iframe>
</div>

<style>
  .resizeMe {
    resize: horizontal;
    overflow: auto;
    width: 400px;
    max-width: 100%;
    height: 300px;
    border: 1px solid #ccc;
  }

  .resizeMe > iframe {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>

Now the sidebar appears on the bottom of the content when resized. Look at that flexibility!

## Flex stretch

Sometimes you might want a div to fill the remaining horizontal space. This is one of those rare cases where you apply the property to the flex item itself instead of its container/parent.

The below div has no width set, yet it stretches to fill the entire width with `flex-grow:1;`

<div class="demo" style="display:flex">
    <div class="stretch-w"></div>
</div>
<style>
    .stretch-w {
        border: 1px solid var(--accent-green);
        height: 50px;
        flex-grow: 1;
        background-color: var(--accent-purple);
    }
</style>

By default, flex containers are set to `flex-direction:row;` which means its flex items "flow" in a horizontal row.

If you were to set `flex-direction:column;` on the parent then `flex-grow:1;` would fill the entire height.

```html
<div class="flex-parent">
  <div class="flex-child"></div>
</div>
```

```css
.flex-parent {
  flex-direction: column;
}
.flex-child {
  flex-grow: 1;
}
```

<div class="demo stretch-demo" style="display:flex; height:400px;">
    <div class="stretch-h"></div>
</div>
<style>
    .stretch-demo {
        flex-direction:column;
    }
    .stretch-h {
        border: 1px solid var(--accent-green);
        width: 100px;
        flex-grow: 1;
        background-color: var(--accent-purple);
    }
</style>

## Learn more

- [CSS Flexbox Layout Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) by CSS Tricks provides a much more comprehensive overview of Flexbox.
- [Flexbox Froggy](https://flexboxfroggy.com/) is a game you can play in your browser to practice flexbox.
