"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

import { Bio } from "../schema";

import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  title: Bio["title"];
  description: Bio["description"];
  imageUrl: Bio["imageUrl"];
  color: Bio["color"];
}

export function Header({
  children,
  title,
  description,
  imageUrl,
  color,
}: Props) {
  return (
    <Flex
      as="header"
      backgroundColor={color}
      paddingY={8}
      paddingX={[10, 28]}
      borderRadius="2xl"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={6}
      position="relative"
    >
      <Box
        borderWidth={2}
        borderStyle="solid"
        borderColor="white"
        borderRadius="2xl"
        overflow="hidden"
        position="relative"
        width="100px"
        height="118px"
        marginTop={-16}
      >
        <Image
          src={imageUrl}
          alt={title}
          priority
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Box>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <Text fontSize="2xl" fontWeight="semibold" textAlign="center">
          {title}
        </Text>
        <Text fontSize="sm" color="gray.600" textAlign="center">
          {description}
        </Text>
      </Flex>
      {children}
    </Flex>
  );
}
