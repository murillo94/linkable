import Bio from "./features/bio";

import { bioSchema } from "./schema";

async function getData() {
  const res = await fetch(
    "https://raw.githubusercontent.com/murillo94/linkable/main/src/app/data.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = res.json();

  return data;
}

export default async function Home() {
  const data = await getData();
  const parsedData = bioSchema.parse(data);

  return <Bio data={parsedData} />;
}
