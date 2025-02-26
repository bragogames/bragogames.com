export const cacheLngKey: string = "__brago_blog_lng__";
export const cacheThemeKey: string = "__brago_blog_theme__";
export const cacheRealSourceKey: string = "__brago_blog_source__";

export const domain =
  process.env.NODE_ENV === "production"
    ? "https://www.brago.io"
    : "http://localhost:3000";

export const sitemapUrls = ["support"];

export const manifest = {
  name: "Brago",
  short_name: "Brago",
  description: "Every player, the hero of their own story.",
  start_url: "/",
  display: "standalone",
  background_color: "#fff",
  theme_color: "#fff",
  icons: [
    {
      src: `${domain}/logo.png`,
      sizes: "any",
      type: "image/png",
    },
  ],
};
