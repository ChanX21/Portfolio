import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()).default([]),
    published: z.boolean().default(true)
  })
});

export const collections = { blog };
