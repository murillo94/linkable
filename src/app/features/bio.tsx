"use client";

import { useState, type ReactElement } from "react";
import { Box, Flex } from "@chakra-ui/react";

import { Header } from "../components/header";
import { Button } from "../components/button";
import { Section } from "../components/section";
import { InfoLink } from "../components/info-link";
import { List } from "../components/icons/list";
import { Grid } from "../components/icons/grid";

import type { Bio, BioSectionFormat } from "../schema";

type Icons = Record<
  BioSectionFormat,
  {
    icon: ReactElement;
    label: string;
  }
>;

const icons = {
  row: {
    icon: <List />,
    label: "Change to list view",
  },
  column: {
    icon: <Grid />,
    label: "Change to grid view",
  },
} satisfies Icons;

interface Props {
  data: Bio;
}

export default function Bio({ data }: Props) {
  const [format, setFormat] = useState<BioSectionFormat>("column");

  const handleFormat = () => {
    setFormat((prevState) => (prevState === "column" ? "row" : "column"));
  };

  return (
    <Box width={["100%", 600]} marginY={20} marginX="auto" paddingX={["6", 0]}>
      <Flex gap={20} flexDirection="column">
        <Header
          title={data.title}
          description={data.description}
          imageUrl={data.imageUrl}
        >
          <Box position="absolute" right="0" bottom="0">
            <Button
              ariaLabel={icons[format].label}
              icon={icons[format].icon}
              onClick={handleFormat}
            />
          </Box>
        </Header>
        {data.sections.map((section) => (
          <Section key={section.title} variant={format} title={section.title}>
            {section.links.map((link) => (
              <InfoLink key={link.siteUrl} variant={format} data={link} />
            ))}
          </Section>
        ))}
      </Flex>
    </Box>
  );
}
