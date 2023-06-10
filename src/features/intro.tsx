"use client";

import { Link as Link, Flex, Heading } from "@chakra-ui/react";
import LinkBase from "next/link";

const pages = [
  {
    title: "Tibo's page",
    url: "/tibo",
  },
  {
    title: "Steve's page",
    url: "/steve",
  },
];

export function Intro() {
  return (
    <Flex
      width={["100%", 600]}
      marginY={24}
      marginX="auto"
      paddingX={[6, 0]}
      flexDirection="column"
      gap={10}
    >
      <Heading>A Link in Bio. But Rich and Beautiful.</Heading>
      <Flex flexDirection="column" gap={3}>
        {pages.map((page) => (
          <Link key={page.url} as={LinkBase} href={page.url} borderRadius="md">
            {page.title}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}
