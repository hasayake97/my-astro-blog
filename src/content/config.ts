import {z, defineCollection} from 'astro:content';

const blog = defineCollection({
    type: "content",
    schema: ({image}) =>
        z.object({
            title: z.string(),
            draft: z.boolean().optional(),
            pubDatetime: z.date().optional(),
            description: z.string().optional(),
            featured: z.boolean().optional(),
            tags: z.array(z.string()).default(["others"]),
            ogImage: image()
                .refine(img => img.width >= 1200 && img.height >= 630, {
                    message: "OpenGraph image must be at least 1200 X 630 pixels!",
                })
                .or(z.string())
                .optional(),
            canonicalURL: z.string().optional(),
        }),
});

export const collections = {blog};
