"use client";

import { Box, Flex, Link as LinkBase, Text } from "@chakra-ui/react";
import Image from "next/image";

import type { Variants } from "../types";
import type { Bio, BioSectionLink } from "../schema";

const variants = {
  row: {
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
  },
  column: {
    flexDirection: ["column", "row"],
    alignItems: ["flex-start", "center"],
    textAlign: ["left", "center"],
  },
} satisfies Variants;

interface Props {
  data: BioSectionLink;
  color: Bio["color"];
  variant?: keyof typeof variants;
}

export function InfoLink({ data, color, variant = "column" }: Props) {
  return (
    <LinkBase
      href={data.siteUrl}
      target="_blank"
      padding={[6, data.provider ? 4 : 6]}
      backgroundColor={data.provider?.backgroundColor || `${color}20`}
      boxShadow="0 2px 4px rgba(0, 0, 0, .04)"
      borderWidth={1}
      borderStyle="solid"
      borderColor="gray.100"
      borderRadius="2xl"
      textDecoration="none"
      display="flex"
      flexDirection={variants[variant].flexDirection}
      alignItems={variants[variant].alignItems}
      textTransform="none"
      textDecor="none"
      gap={4}
      flex={1}
      _hover={{
        backgroundColor: data.provider?.backgroundColorHover || color,
      }}
      _first={{ minWidth: "30%" }}
    >
      <Box
        backgroundColor="white"
        borderRadius="lg"
        overflow="hidden"
        position="relative"
        width="2.25rem"
        height="2.25rem"
      >
        <Image
          src={data.provider ? `/${data.provider.key}.jpg` : data.imageUrl}
          alt={data.title}
          priority
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Box>
      <Flex flexDirection="column" alignItems="flex-start" gap={[1, 0]}>
        <Text
          fontSize="md"
          fontWeight="medium"
          textAlign={variants[variant].textAlign}
          flex={1}
        >
          {data.title}
        </Text>
        <Text
          fontSize="sm"
          fontWeight="normal"
          textAlign={variants[variant].textAlign}
          flex={1}
        >
          {data.description}
        </Text>
      </Flex>
    </LinkBase>
  );
}
