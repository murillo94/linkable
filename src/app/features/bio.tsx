"use client";

import { Box, Flex } from "@chakra-ui/react";

import { Header } from "../components/header";
import { Section } from "../components/section";
import { InfoLink } from "../components/info-link";

import type { Bio } from "../schema";

interface Props {
  data: Bio;
}

export default function Bio({ data }: Props) {
  return (
    <Box width={["100%", 600]} marginY={20} marginX="auto" paddingX={["6", 0]}>
      <Flex gap={20} flexDirection="column">
        <Header
          title={data.title}
          description={data.description}
          imageUrl={data.imageUrl}
        />
        {data.section.map((section) => (
          <Section
            key={section.title}
            title={section.title}
            format={section.format}
          >
            {section.links.map((link) => (
              <InfoLink key={link.siteUrl} data={link} />
            ))}
          </Section>
        ))}
      </Flex>
    </Box>
  );
}
