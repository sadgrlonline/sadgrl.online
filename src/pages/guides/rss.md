---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Using RSS on a static website"
description: "Learn to create an RSS feed on Neocities"
category: "Neocities"
tags: ["html", "css"]
---

An RSS feed is a feed that anyone can subscribe to with a feed reader in order to receive updates about a website.

Many sites like Wordpress and Dreamwidth come with an RSS feed which is automatically generated from new posts. Static webhosts like Neocities don't have this functionality, so instead we must create and update a feed manually.

This means every time you want your feed subscribers to be notified that you've posted an update, you'll have to add a link to that page to your feed.

> ✏️ **Tip**
>
> Neocities does sort of have a feed, but it consists of a single entry with the date and time of your last update. It updates automatically, even for minor changes. It is located at `https://neocities.org/site/username.rss`, just replace `username` with your site username.

## Creating a feed file

To create your own feed, the first thing you'll need to do is create the feed file.

1. Create a file and name it something like `feed.xml`. This will be the file that you link to in order to share your feed.
2. Paste the basic RSS skeleton:

```xml
<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <atom:link href="https://yourwebsite.neocities.org/feed.xml" rel="self" type="application/rss+xml" />
        <title>Your Website Title</title>
        <link>https://yourwebsite.neocities.org</link>
        <description>Your website description</description>
        <language>en-us</language>
    </channel>
</rss>
```

3. Replace the `atom:link href` with the full URL of your feed (e.g., the file you're editing right now).
4. Fill out the values for title, link, description and language. [You can find RSS language codes here](https://www.rssboard.org/rss-language-codes).

## Adding pages to the feed

Right now, your feed is empty. Let's add some pages to it.

1. Go to the page you'd like to add to your RSS feed, and add this code between your `<head></head>` tags:

```html
<link rel="alternate" type="application/rss+xml" href="/feed.xml" title="RSS" />
```

> ✏️ **Tip**
>
> Make sure you change the `href` value to point correctly to your new feed file.

2. Return to your `feed.xml` file.
3. Before the closing `</channel>` tag, add this bit of text to represent that particular page or update:

```xml
<item>
    <title>My Page Title</title>
    <pubDate>Wed, 10 Nov 2021 15:52:00 EST</pubDate>
    <link>https://yourwebpage.neocities.org/page.html</link>
    <guid>https://yourwebpage.neocities.org/page.html</guid>
    <description>A description of the page.</description>
</item>
```

4. Change the values for the fields that appear. `guid` requires a unique ID so I find it easy just to use the URL.

At the end, your feed will look something like this:

```xml
<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
    <atom:link href="https://yourwebsite.neocities.org/feed.xml" rel="self" type="application/rss+xml" />
    <title>Your Website Title</title>
    <link>https://yourwebsite.neocities.org</link>
    <description>Your website description</description>
    <language>en-us</language>
        <item>
        <title>My Page Title</title>
        <pubDate>Wed, 10 Nov 2021 15:52:00 EST</pubDate>
        <link>https://yourwebpage.neocities.org/page.html</link>
        <guid>https://yourwebpage.neocities.org/page.html</guid>
        <description>A description of the page.</description>
        </item>
    </channel>
</rss>
```

When you're done, you can [validate your feed](https://validator.w3.org/feed/), which will tell you if you've made any errors.

As you can see, this is a very manual process. You might come to the realization that it's not worth it to you to add every page on your site to an RSS feed. Alternatively, you might only add certain pages (like blog posts, or other special pages).
