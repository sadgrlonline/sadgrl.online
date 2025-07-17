---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Absolute beginner's guide to Neocities"
description: "Learn how to create your own website on Neocities"
category: "Neocities"
tags: ["html", "css"]
---

Neocities is a free static website host where you can make your own site creation to share with the world! It’s a little intimidating for first-time users, so I made this guide to hopefully make it a little easier.

> ✏️ **Tip**
>
> This guide assumes you have little to no experience building websites, and takes a "do now, learn later" approach.

## Creating your first webpage

1. Go to Neocities and sign up to create an account. Once you've created your account, log in. The first time you log in, you'll be taken to the **Dashboard**. Normally this page displays a feed of the sites you are following.

2. Select the red Edit Site button at the top right of the screen. This will take you to the file manager.

![A screenshot of your Neocities site directory with the list button highlighted](https://sadhost.neocities.org/images/learn/neocities-dashboard-view.png)

3. Select the list view highlighted on the above screenshot. It just makes things a little easier to view. This is the interface you will use to build your website. A static website is really just a basic folder that exists on a server somewhere. This Home screen is your “folder”. You can upload or create files & folders here. Although your account is new, you’ll have some files in here already.

![A screenshot of your Neocities site directory](https://sadhost.neocities.org/images/learn/neocities-dashboard-home.png)

4. Look for a file called `index.html`. This file in your Home folder is your homepage. It is the first page people will see when viewing your website.

5. Select the **Edit** option beside it to edit your homepage.

6. In a new tab, visit my [layout maker](#) to create a layout type that you think looks good, using the tools at the top of the page. When it looks good, click generate HTML and copy the contents from the textarea to your clipboard.

7. Switch back to your tab with index.html and remove everything just between the `<body></body>` tags.

8. Paste the code between these tags and then select Save and then View to preview your page.

9. Now you can go back to your index.html and replace the placeholder text with your own content.

10. If you used my layout maker, you can find `<style></style>` tags at the bottom of the code you copied. At the top, there is an area called `:root {}` where CSS variables are stored. You can change these values to customize your site.

> ✏️ **Tip**
>
> CSS works with the name of a color, (like `color:black;`) but most of the times you'll want to use a hex code (`color:#000000`). [Colorzilla](https://www.colorzilla.com/) is a free browser extension that can help you pick the hex value of a color from an existing webpage.

10. If you want to use the CSS on every page, it might be worth putting it in its own file and linking to it on each page. You can find [more information about linking stylesheets in this guide](/learn/guide/including-css).

> ✏️ **Tip**
>
> If you make a change but you can't see the change when viewing your page, press `Ctrl+F5` (`Cmd+Shift+R` on Mac) to hard refresh.

> ✏️ **Tip**
>
> If you return to edit your `.css` file and notice that (some/all) of your code is missing, do this first: while on the page to edit your CSS, press `Ctrl+F5` (`Cmd+Shift+R` on Mac) to hard refresh. The only files which the browser caches this way are stylesheets.

## Creating more pages

New webpages can be added by creating new `.html` files.

How and where you create your files and folders will impact how your link looks when you share them.

For example, if you created a file in your Home folder called about.html, that page will be available at https://yoursite.neocities.org/about.html

If you wanted your link to look like https://yoursite.neocities.org/about/ you would need to create a folder called `about` and inside of that folder, place a file called `index.html`

Keeping all of our pages as `.html` files in our Home folder would get messy. Putting different sections in their own folders are great ways to keep your website organized.
