import { Bio } from "@/features/bio";
import { bioSchema } from "@/schema";

interface Response {
  params: {
    id: string;
  };
}

/**
 * Simulating API fetch to be render this page as SRR.
 * Otherwise we can just get the relative path and use it to render as static page.
 */
async function getData(id: Response["params"]["id"]) {
  const res = await fetch(
    `https://raw.githubusercontent.com/murillo94/linkable/main/${id}-data.json`,
    {
      next: {
        revalidate: 0,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = res.json();

  return data;
}

export default async function Home({ params }: Response) {
  const { id } = params;
  const data = await getData(id);
  const parsedData = bioSchema.parse(data);

  return <Bio data={parsedData} />;
}
