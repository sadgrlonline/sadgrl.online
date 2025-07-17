---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Create a backup of your Neocities website"
description: "Learn to create a backup of your Neocities website"
category: "Neocities"
tags: ["neocities"]
---

Neocities allows you to download your entire site if your site is under a particular size (possibly 500MB?)

This option can be found at the bottom of your file dashboard. The link is called **Download entire site**.

If you are missing this option, it's possible your website is too large, but there are other options you can try to get a complete backup of your site.

## A note about free accounts

Some tools like Cyberduck and Rclone may not work with free Neocities accounts, but you are encouraged to try them anyway.

You can also try using the free software [HTTrack](https://www.httrack.com/) to download a local copy of your website. This software is available for most operating systems.

## Using Cyberduck on Windows or Mac

Cyberduck is available on Windows and Mac. For Linux users, I recommend Rclone.

### Connecting your account

1. Download and install the latest version of [Cyberduck](https://cyberduck.io/) (for Windows and Mac only)
2. Open Cyberduck and select **Open Connection** at the top.
3. Paste this into the **Server** field: https://neocities.org/webdav
4. Enter your Neocities username and password when prompted, then select **Connect**.

> ✏️ **Tip**
>
> If you have more than one Neocities account on the same account, log in with the username of the account you'd like to back up and your usual password.

If everything worked correctly, you should see Cyberduck populate with a listing of your website files.

### Downloading the files

1. Select all of the files you wish to download
2. While selected, right-click and choose **Download To...**, choose a folder on your PC as a destination and select **OK**.
3. The **Transfers** window will pop up, but it's easy to "lose". You can locate it by clicking on the Cyberduck icon in your taskbar. When your download is complete, this window will say **Download complete**.

## Using Rclone on Linux

[Rclone](https://rclone.org/) is available on most operating systems, but this implementation is specifically for using [RcloneBrowser](https://kapitainsky.github.io/RcloneBrowser/) on Linux. That said, it should follow the same steps.

1. Download and install [RcloneBrowser](https://kapitainsky.github.io/RcloneBrowser/).
2. Open the software and select the **Config...** button at the bottom. A terminal window will pop up.
3. Enter `n` for New remote
4. Enter a nickname for the site you are connecting to.
5. Enter the number for `Webdav` as it appears in the list onscreen.
6. Enter https://neocities.org/webdav as the host URL
7. Enter the number representing the Other option onscreen.
8. Enter your Neocities username when prompted for the user name.
9. Enter `y` to input your password, and confirm when prompted.
10. Press `enter` when it prompts for the `bearer_token` (although it's possible to authenticate with an API key here)
11. Enter `n` when prompted for the advanced config.
12. Enter `y` to confirm your changes.
13. Enter `q` to quit config.

> ✏️ **Tip**
>
> These are a lot of steps all at once, and if you enter one item incorrectly, there's no easy way to undo other than to finish and edit the prompts afterward by stepping through them again. That said, it's easy to delete a config and create a new one so no worries about messing up.

14. On the **Remotes** tab you should now see your website, identified by the nickname you assigned it during configuration. Double-click on it to load your site. If everything worked correctly, you should see a listing of the files on your website populate.
15. To select all items, select the icon at the top of the tree, then select **Download** from the top of the toolbar.
16. Select the folder icon beside the Destination field to choose a location for the files.
17. Ensure the **Mode** is toggled to **Copy**. Choosing **Move** will remove the files from Neocities.

> The Sync mode can be used to sync a local copy with the version on Neocities, which can make updating your site a little easier.
