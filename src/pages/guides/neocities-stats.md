---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Display last update and visitor count on Neocities"
description: "Learn to display a widget that shows a last updated date and visitor count"
category: "Neocities"
tags: ["neocities"]
---

This guide is for publicly displaying the date your site was last updated and how many visitors you've had on your website.

This guide uses the technique created by [Dannarchy @ Neocities](https://dannarchy.com/tut/tut_002.html).

1. Edit the page you want to display these values on, and paste the following code before your closing `</body>` tag.

```javascript
<script>
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var site_data = JSON.parse(this.responseText);
        var num_arr = site_data.info.views.toString().split("");
        var num_str = "";
        for (i = 0; i < num_arr.length; i++) {
            num_str += num_arr[i];
            if ( (num_arr.length-1 - i) % 3 == 0 && (num_arr.length-1 - i) != 0 ) {num_str += ",";}
            var date_str = site_data.info.last_updated;
            var date_obj = new Date(site_data.info.last_updated);
            document.getElementById("lastupdate").innerHTML = (date_obj.getMonth()+1) + "-" + date_obj.getDate() + "-" + date_obj.getFullYear();
        }
        document.getElementById("hitcount").innerHTML = num_str;
    }
};
xhttp.open("GET", "https://weirdscifi.ratiosemper.com/neocities.php?sitename=USERNAME", true);
xhttp.send();
</script>
```

2. In the code above, change the `USERNAME` value to match your Neocities username.
3. To display the last update, use this code where you'd like it to show up:
```html
Last Updated: <span id="lastupdate"></span>
```
4. To display the visitor count, use this code:
```html
You are Visitor #: <span id="hitcount"></span>
```
5. Save and view your file to verify that it worked.
