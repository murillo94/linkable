"use client";

import { IconButton } from "@chakra-ui/react";

import type { ReactElement } from "react";

interface Props {
  ariaLabel: string;
  icon: ReactElement;
  onClick: () => void;
}

export function Button({ ariaLabel, icon, onClick }: Props) {
  return (
    <IconButton
      aria-label={ariaLabel}
      icon={icon}
      onClick={onClick}
      backgroundColor="#d5dffc"
      _hover={{ backgroundColor: "#b9c7fa" }}
      minWidth="20px"
      width="36px"
      height="36px"
      borderRadius="2xl"
    />
  );
}
