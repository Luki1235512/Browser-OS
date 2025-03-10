const { readdirSync, statSync, writeFileSync } = require("fs");
const { extname, join } = require("path");

const xmlUrls = [];

const buildAppSitemap = (path) => {
  readdirSync(path).forEach((entry) => {
    if (statSync(join(path, entry)).isDirectory()) {
      xmlUrls.push();
    }
  });
};

const buildFileSitemap = (path, excludePaths, callback) => {
  const publicPath = join("public/", path);

  readdirSync(publicPath).forEach((entry) => {
    const entryPath = join(path, entry);
    const urlEntryPath = entryPath.replace(/\\/g, "/");
    const stats = statSync(join(publicPath, entry));

    if (stats.isDirectory()) {
      if (!excludePaths.includes(urlEntryPath)) {
        buildFileSitemap(entryPath, excludePaths, callback);
      }
    } else if (![".ini", ".url"].includes(extname(entry).toLowerCase())) {
      xmlUrls.push(callback(stats.mtime.toISOString().substring(0, 10)));
    }
  });
};

buildAppSitemap("components/apps");

buildFileSitemap(
  "Users/Public/Documents",
  [],
  (path, mtime) => `<url><loc>${path}</loc><lastmod>${mtime}</lastmod></url>`
);

buildFileSitemap(
  "Users/Public/Pictures",
  [],
  (path, mtime, url) =>
    `<url><loc>${path}</loc><image:image><image:loc>${url}</image:loc></image:image><lastmod>${mtime}</lastmod></url>`
);

writeFileSync(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${xmlUrls.join(
    ""
  )}</urlset>`,
  {
    flag: "w",
  }
);

writeFileSync("public/robots.txt", {
  flag: "w",
});
