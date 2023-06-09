"use client";

import { Box, Text, Flex, Link } from "@chakra-ui/react";
import Image from "next/image";
import data from "../data.json";

import type * as CSS from "csstype";

const mainBackgroundColor = "#D1DAFC";
const linkBackgroundColor = "#D1DAFC20";

export default function Bio() {
  return (
    <Box
      as="main"
      width={["100%", 600]}
      marginY={20}
      marginX="auto"
      paddingX={["6", 0]}
    >
      <Flex gap={20} flexDirection="column">
        <Flex
          backgroundColor={mainBackgroundColor}
          paddingY="8"
          paddingX={["10", "28"]}
          borderRadius="2xl"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={6}
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
            marginTop="-16"
          >
            <Image src="/tibo-1.jpg" alt="Tibo's face" priority fill />
          </Box>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={1}
          >
            <Text fontSize="2xl" fontWeight="semibold" textAlign="center">
              {data.title}
            </Text>
            <Text fontSize="sm" color="gray.600" textAlign="center">
              {data.description}
            </Text>
          </Flex>
        </Flex>
        {data.section.map((section) => (
          <Flex flexDirection="column" gap={6} key={section.title}>
            <Text fontSize="lg" fontWeight="semibold" textAlign="left">
              {section.title}
            </Text>
            <Flex
              flexDirection={[
                "column",
                section.format as CSS.Property.FlexDirection,
              ]}
              gap={4}
            >
              {section.links.map((link) => (
                <Link
                  key={link.siteUrl}
                  href={link.siteUrl}
                  target="_blank"
                  padding={["6", link.provider?.key ? "4" : "6"]}
                  backgroundColor={
                    link.provider?.backgroundColor || linkBackgroundColor
                  }
                  borderWidth={1}
                  borderStyle="solid"
                  borderColor="gray.100"
                  borderRadius="2xl"
                  textDecoration="none"
                  display="flex"
                  alignItems="center"
                  textTransform="none"
                  textDecor="none"
                  gap={6}
                  flex={1}
                  _hover={{
                    backgroundColor: link.provider
                      ? `${link.provider?.backgroundColorHover}`
                      : mainBackgroundColor,
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
                      src={
                        link.provider?.key
                          ? `/${link.provider?.key}.jpg`
                          : link.imageUrl
                      }
                      alt="Logo"
                      priority
                      fill
                    />
                  </Box>
                  <Text
                    fontSize="sm"
                    fontWeight="normal"
                    textAlign="center"
                    flex={1}
                  >
                    {link.title}
                  </Text>
                </Link>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
