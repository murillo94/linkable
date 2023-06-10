import { z } from "zod";

export const bioSchema = z.object({
  title: z.string(),
  description: z.string(),
  imageUrl: z.string(),
  sections: z.array(
    z.object({
      title: z.string(),
      links: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
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
export type BioSectionFormat = "row" | "column";
export type BioSectionTitle = NonNullable<Bio["sections"][number]["title"]>;
export type BioSectionLink = NonNullable<
  Bio["sections"][number]["links"][number]
>;
