"use client";

import { Flex, Text } from "@chakra-ui/react";

import type { BioSectionTitle } from "../schema";
import type { ReactNode } from "react";
import type { Variants } from "../types";

const variants = {
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  column: {
    flexDirection: "column",
  },
} satisfies Variants;

interface Props {
  children: ReactNode;
  title: BioSectionTitle;
  variant?: keyof typeof variants;
}

export function Section({ children, title, variant = "column" }: Props) {
  return (
    <Flex flexDirection="column" gap={6}>
      <Text fontSize="lg" fontWeight="semibold" textAlign="left">
        {title}
      </Text>
      <Flex {...variants[variant]} gap={4}>
        {children}
      </Flex>
    </Flex>
  );
}
