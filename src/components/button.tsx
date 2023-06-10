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
      backgroundColor="#ffffff20"
      _hover={{ backgroundColor: "#ffffff40" }}
      minWidth="1.25rem"
      width="2.25rem"
      height="2.25rem"
      borderRadius="2xl"
    />
  );
}
