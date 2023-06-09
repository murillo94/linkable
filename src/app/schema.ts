import { z } from "zod";

export const bioSchema = z.object({
  title: z.string(),
  description: z.string(),
  section: z.array(
    z.object({
      title: z.string(),
      format: z.string(),
      links: z.array(
        z.object({
          title: z.string(),
          siteUrl: z.string(),
          imageUrl: z.string(),
          provider: z.union([
            z.object({
              key: z.string(),
              backgroundColor: z.string(),
              backgroundColorHover: z.string(),
            }),
            z.null(),
          ]),
        })
      ),
    })
  ),
});

export type Bio = z.infer<typeof bioSchema>;
