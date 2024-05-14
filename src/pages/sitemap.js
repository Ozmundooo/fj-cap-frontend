import { create } from "xmlbuilder2";

export default function sitemap() {
  const xml = create({ version: "1.0", encoding: "UTF-8" }).ele("urlset", {
    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
  });

  const urls = [
    {
      url: "https://freshtajamasi.ca/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://freshtajamasi.ca/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://freshtajamasi.ca/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://freshtajamasi.ca/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  urls.forEach((url) => {
    xml
      .ele("url")
      .ele("loc")
      .txt(url.url)
      .up()
      .ele("lastmod")
      .txt(url.lastModified.toISOString())
      .up()
      .ele("changefreq")
      .txt(url.changeFrequency)
      .up()
      .ele("priority")
      .txt(url.priority.toString())
      .up()
      .up();
  });

  return xml.end({ prettyPrint: true });
}
