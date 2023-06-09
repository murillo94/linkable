"use client";

import { useEffect } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={4}
      marginY={20}
    >
      <Text as="h1" fontSize="2xl" fontWeight="semibold" textAlign="center">
        Something went wrong!
      </Text>
      <Button onClick={reset}>Try again</Button>
    </Flex>
  );
}
