---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Using absolute and relative links"
description: "Learn about creating links on your website"
category: "HTML and CSS"
tags: ["html"]
---

One of the biggest issues that trip up new website creators are links. Creating a link to another website is relatively straightforward, but creating links to your own files - like images, stylesheets, or other pages - can be a little trickier.

This guide aims to clarify things by talking about the two different ways of linking to your own content: absolute and relative links.

```bash
sadgrl.online/
├── about/
│   ├── archive.html
│   ├── index.html
│   └── projects/
│       └── 2024.html
├── images/
│   └── rose.png
└── index.html
```

## Absolute links

An **absolute** link always starts from the root folder of your website. In our example, the root folder is `sadgrl.online/`.

```html
<img src="/images/rose.png" alt="A rose" />
```

This link will work when used from any file on your site - even deep ones like `/about/index.html` because the beginning `/` means "start from the top".

## Relative links

A **relative** link starts from the file you're currently editing.

In this example, we're creating a link that's going to be on `about/index.html`.

```html
<img src="../images/rose.png" alt="A rose" />
```

Relative links are different depending on where on your website you're linking from.

Let's break this down:

- `..` means "go up one folder" from `/about/` back to the root (`sadgrl.online`).
- Then, once you're in the root, go to `images/` and load `rose.png`.

Here's another example. Let's try creating that same link inside of `about/projects/2024.html`.

```html
<img src="../../images/rose.png" alt="A rose" />
```

Since `2024.html` is nested one folder deeper than `about/`, we need to take two steps up (`../../`) to get to our images folder.

Let's try one more example. We're in `about/index.html` and we want to link to `about/archive.html` which is in the same folder.

```html
<a href="archive.html"></a>
```

Since `archive.html` is in the same folder, we don't need to go up a level.

This would take you to the same link, because `./` means "start from the current folder".

```html
<a href="./archive.html"></a>
```

## A note on viewing files locally

If you download a local copy of your site and open it by double-clicking on `index.html` (instead of running it through a server), absolute links like `/images/rose.png` may not work. That’s because there’s no real "root" when viewing files directly on your computer.

In contrast, relative links (like `../images/rose.png`) still work because they start from the folder of the current file.

That’s why many people use tools like Live Server plugins on their code editors, which creates a local server and makes absolute links behave just like they would online.

## Which should I use?

Absolute links are helpful when you want the link to always work, no matter where the file is.

If you’re just getting started, it’s fine to stick with absolute links for simplicity. But as you build more complex sites, knowing how relative paths work can help you keep things flexible and portable.
