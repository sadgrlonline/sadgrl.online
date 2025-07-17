---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Creating and styling background images"
description: "Learn to create and style background images"
category: "HTML and CSS"
tags: ["html", "css"]
---

Background images are applied to elements via the CSS.

We can set a background image to the `body` element like so:

```css
body {
  background-image: url("image.jpg");
}
```

> ✏️ **Tip**
>
> Not sure how to link to the right image? Check out [Using absolute and relative links](/guides/links).

## Repeat

By default, setting a `background-image` alone will repeat the image upwards and downwards like a grid, if it's small enough to be repeated.

We can change how it repeats by adding one of the following values:

```css body {
background-image:url('image.jpg'); /* define the background image */
/* don't use all of these at once! */
background-repeat:no-repeat; /* stop repeat */
background-repeat:repeat; /* start repeat */
background-repeat:repeat-y; /* repeat up and down */
background-repeat:repeat-x; /* repeat left and right */
}
```

For example, I might want a divider image to only `repeat-x`. This means it repeats on the x-axis, or left and right.

 <div class="repeat-x">
</div>
<style>
    .repeat-x {
        background-image: url('https://sadhost.neocities.org/images/learn/divider-halloween.gif');
        width: 100%;
        height: 150px;
        background-size: 25%;
        background-repeat: repeat-x;
    }
</style>

## Sizing

For sizing background images, there are many options, but we're only going to focus on a few. All of these methods use the `background-size` property.

Because the background image is being applied to an element, it's important to keep in mind that the size values we choose are going to be relevant to the element's size.

For demonstration, we're going to use [this image](https://sadhost.neocities.org/images/learn/pumpkin-head.png) which is quite large. It is being displayed in each of the below boxes with different values.

 <div class="backgroundSizes">
    <div>
        <div class="label">Unstyled</div>
    </div>
    <div>
        <div class="label">
            <span class="ic">background-size:50%;</span>
        </div>
    </div>
    <div>
        <div class="label">
            <span class="ic">background-size:contain;</span>
        </div>
    </div>
    <div>
        <div class="label">
            <span class="ic">background-size:cover;</span>
        </div>
    </div>
</div>

<style>
    .backgroundSizes,
    .backgroundAttachment {
        display: flex;
        flex-wrap: wrap;
    }

    .backgroundSizes>div {
        border: 1px solid var(--white);
        width: 50%;
        height: 200px;
        position: relative;
        background-image: url('https://sadhost.neocities.org/images/learn/pumpkin-head.png');
    }

    .backgroundSizes>div:nth-of-type(2) {
        background-size: 50%;
    }

    .backgroundSizes>div:nth-of-type(3) {
        background-size: contain;
    }

    .backgroundSizes>div:nth-of-type(4) {
        background-size: cover;
    }

    .label {
        position: absolute;
        bottom: 0;
        background-color: var(--black);
        width: 100%;
        border: 1px solid var(--white);
        text-align: center;
        padding:5px;
    }
</style>

Note that `contain` fits the image height to the element, while `cover` fits the image width.

## Attachment

The `background-attachment` property influences the behavior of the background image while a space is being scrolled. Again there are a couple different options here but we'll only look at a couple. Scroll each of the following divs to see the behavior of the associated property.

<div class="backgroundAttachment">
<div>
    <p>Jump five feet high and sideways when a shadow moves please stop looking at your phone and pet me bird bird bird bird bird bird human why take bird out i could have eaten that. Adventure always small kitty warm kitty little balls of fur yet eat plants, meow, and throw up because i ate plants but meow meow be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day. Hopped up on catnip murf pratt ungow ungow always ensure to lay down in such a manner that tail can lightly brush human face at 5am until human fills food dish or eat fish on floor jump on human and sleep on her all night long be long in the bed</p>
    <div class="label scroll"><span class="ic">Default (scroll)</span></div>

</div>
<div>
    <p>Jump five feet high and sideways when a shadow moves please stop looking at your phone and pet me bird bird bird bird bird bird human why take bird out i could have eaten that. Adventure always small kitty warm kitty little balls of fur yet eat plants, meow, and throw up because i ate plants but meow meow be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day. Hopped up on catnip murf pratt ungow ungow always ensure to lay down in such a manner that tail can lightly brush human face at 5am until human fills food dish or eat fish on floor jump on human and sleep on her all night long be long in the bed</p>
    <div class="label scroll"><span class="ic">background-attachment:local;</span></div>
</div>
</div>
<style>
    .backgroundAttachment {
        display: flex;
        flex-wrap: wrap;
    }
    .backgroundAttachment>div {
        border: 1px solid var(--white);
        width: 50%;
        height: 200px;
        position: relative;
        background-image: url('https://sadhost.neocities.org/images/learn/pixel-graveyard.gif');
        overflow: auto;
    }
    .backgroundAttachment>div:nth-of-type(2) {
        background-attachment: local;
    }
    .backgroundAttachment>div>p {
        background-color: var(--black);
        margin: 40px;
        padding: 10px;
    }
    .ic {
        font-family:monospace;
        color:var
    }
    .scroll {
    position: sticky;
    }
</style>

It's easy to be fooled into thinking `scroll` makes the background scroll with the page, when actually it's `local`.
