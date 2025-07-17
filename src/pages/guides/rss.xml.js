import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Sadgrl's Web Guides",
    description: "A collection of guides about HTML, CSS, and more",
    site: "https://sadgrl.online/",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
