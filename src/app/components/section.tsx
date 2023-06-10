"use client";

import { Flex, Text } from "@chakra-ui/react";

import type * as CSS from "csstype";
import type { Bio } from "../schema";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: Bio["section"][number]["title"];
  format: Bio["section"][number]["format"];
}

export function Section({ children, title, format }: Props) {
  return (
    <Flex flexDirection="column" gap={6}>
      <Text fontSize="lg" fontWeight="semibold" textAlign="left">
        {title}
      </Text>
      <Flex
        flexDirection={["column", format as CSS.Property.FlexDirection]}
        gap={4}
      >
        {children}
      </Flex>
    </Flex>
  );
}
