"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";

import { Bio } from "../schema";

import type { ReactNode } from "react";

const imageVariants: Variants = {
  offscreen: {
    y: -300,
  },
  onscreen: {
    y: -80,
    rotate: -6,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

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
      position="relative"
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={imageVariants}>
          <Box
            borderWidth={4}
            borderStyle="solid"
            borderColor="white"
            borderRadius="2xl"
            overflow="hidden"
            position="relative"
            width="6.25rem"
            height="7.375rem"
          >
            <Image
              src={imageUrl}
              alt={title}
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Box>
        </motion.div>
      </motion.div>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={1}
        marginTop={-12}
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
