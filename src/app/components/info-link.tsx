"use client";

import { Box, Link as LinkBase, Text } from "@chakra-ui/react";
import Image from "next/image";

import { Bio } from "../schema";

import { linkBackgroundColor, mainBackgroundColor } from "../constants";

interface Props {
  data: Bio["section"][number]["links"][number];
}

export function InfoLink({ data }: Props) {
  return (
    <LinkBase
      href={data.siteUrl}
      target="_blank"
      padding={["6", data.provider ? "4" : "6"]}
      backgroundColor={data.provider?.backgroundColor || linkBackgroundColor}
      borderWidth={1}
      borderStyle="solid"
      borderColor="gray.100"
      borderRadius="2xl"
      textDecoration="none"
      display="flex"
      flexDirection={data.provider ? "row" : ["column", "row"]}
      alignItems={data.provider ? "center" : ["flex-start", "center"]}
      textTransform="none"
      textDecor="none"
      gap={[4, 2]}
      flex={1}
      _hover={{
        backgroundColor:
          data.provider?.backgroundColorHover || mainBackgroundColor,
      }}
    >
      <Box
        backgroundColor="white"
        borderRadius="lg"
        overflow="hidden"
        position="relative"
        width="42px"
        height="42px"
      >
        <Image
          src={data.provider ? `/${data.provider.key}.jpg` : data.imageUrl}
          alt={data.title}
          priority
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Box>
      <Text
        fontSize="sm"
        fontWeight="normal"
        textAlign={["left", "center"]}
        flex={1}
      >
        {data.title}
      </Text>
    </LinkBase>
  );
}
