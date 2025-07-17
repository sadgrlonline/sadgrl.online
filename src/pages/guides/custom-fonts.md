---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Using custom fonts"
description: "Learn to use custom fonts"
category: "HTML and CSS"
tags: ["css"]
---

Custom fonts are a fun way to spice up your website.

In order to use them, you need one of two things:

- The actual font file itself, uploaded onto your website or,
- A link to the font file that someone else is hosting

There are tons of free fonts available on websites like [DaFont](https://www.dafont.com/) or [Font Squirrel](https://www.fontsquirrel.com/) that you can upload to your site.

There's also [Google Fonts](https://fonts.google.com/) which can sometimes slow down the loading speed of your website. They are useful if you'd like instant and free web-fonts. The method for adding those is slightly different and not covered here.

> ✏️ **Tip**
>
> Keep in mind that while most font files aren't huge, they do take up more space on your webserver than your average HTML file.

To add custom fonts to your website:

1. Grab the font files you want to use. If it's in a `.zip` or `.rar` file, you'll need to extract it. The most common font file types are `.ttf` (TrueType), `.otf` (OpenType), `.woff` (Web Open Font Format) and `.woff2`, so those are the file extensions you're looking for after unzipping the folder. Upload the font file(s) to your website.
2. Then, in your stylesheet, add the following:

```css
@font-face {
  font-family: "My font name";
  src: url("/fonts/myfont.ttf") format("truetype");
  /* or: */
  src: url("/fonts/myfont.otf") format("opentype");
  /* or */
  src: url("/fonts/myfont.woff") format("woff");
  /* or */
  src: url("/fonts/myfont.woff2") format("woff2");
}
```

3. Change the `font-family` property to something that corresponds to that font. This name is going to be how you refer to the font when assigning it to elements.
4. Change the `src` to the location of the font file.

> ✏️ **Tip**
>
> If your font's file name contains a space, replace the space with a dash `-` for better compatibility. While browsers can technically handle encoded spaces (`%20`), using clean file names avoids issues.
>
> Not sure how to link to the right font? Check out [Using absolute and relative links](/guides/links).

5. Change the `format` to match the file type of the font. `.ttf` files are `truetype` and `.otf` files are `opentype`. `.woff` and `.woff2` files are `woff` and `woff2` respectively.

## Custom font styles

Some fonts provide individual files for each style (such as bold, italic, bold italic, etc.) In this case, if you want to use the associated font with its weight, you’ll need an `@font-face` rule for each style with special instructions.

Here is an example which has separate files for the regular, bold, and bold-italic font styles:

```css
@font-face {
  font-family: Nunito;
  src: url("https://sadhost.neocities.org/fonts/Nunito-Regular.ttf")
    format("truetype");
}

@font-face {
  font-family: Nunito;
  src: url("https://sadhost.neocities.org/fonts/Nunito-Bold.ttf")
    format("truetype");
  font-weight: bold;
}

@font-face {
  font-family: Nunito;
  src: url("https://sadhost.neocities.org/fonts/Nunito-Italic.ttf")
    format("truetype");
  font-style: italic;
}

@font-face {
  font-family: Nunito;
  src: url("https://sadhost.neocities.org/fonts/Nunito-BoldItalic.ttf")
    format("truetype");
  font-style: italic;
  font-weight: bold;
}
```

Notice how in the above example, all of the font-family properties have the same name. This is because we’re using all of the various styles (regular, italic, bold, bold italic) for the same font. Notice that the `src` value changes to the appropriate font file.

To use this font, you only need to specify: `font-family: Nunito` and depending on the other styles (whether the font is italic, bold, etc.) it will show up correctly.
