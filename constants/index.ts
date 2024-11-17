export const cacheLngKey: string = "__brago_blog_lng__";
export const cacheThemeKey: string = "__brago_blog_theme__";
export const cacheRealSourceKey: string = "__brago_blog_source__";
export const basePath =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "" : "";
export const domain =
  process.env.NODE_ENV === "production"
    ? `https://www.brago.io${basePath}`
    : `http://localhost:3000${basePath}`;
export const sitemapUrls = ["support"];
