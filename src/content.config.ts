// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
// Define a `loader` and `schema` for each collection
const news = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/news" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    year: z.string(),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = { news };
