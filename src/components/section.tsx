"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { type DragControls, motion } from "framer-motion";

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
  reorderElement: ReactNode;
  dragControls: DragControls;
  title: BioSectionTitle;
  variant?: keyof typeof variants;
}

export function Section({
  children,
  reorderElement,
  dragControls,
  title,
  variant = "column",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      <Flex
        flexDirection="column"
        gap={6}
        backgroundColor="white"
        onPointerDown={(event) => dragControls.start(event)}
        cursor={["auto", "grab"]}
      >
        <Flex
          gap={4}
          alignItems="center"
          _hover={{ "> .reorder": { display: ["none", "block"] } }}
        >
          <Box className="reorder" display="none">
            {reorderElement}
          </Box>
          <Text fontSize="lg" fontWeight="semibold" textAlign="left">
            {title}
          </Text>
        </Flex>
        <Flex {...variants[variant]} gap={4}>
          {children}
        </Flex>
      </Flex>
    </motion.div>
  );
}
