"use client";

import { useState, type ReactElement } from "react";
import { Box, Flex } from "@chakra-ui/react";
import {
  AnimatePresence,
  motion,
  Reorder,
  useDragControls,
  useMotionValue,
} from "framer-motion";

import { Header } from "../components/header";
import { Button } from "../components/button";
import { Section } from "../components/section";
import { InfoLink } from "../components/info-link";
import { List } from "../components/icons/list";
import { Grid } from "../components/icons/grid";
import { ReorderIcon } from "@/components/icons/reorder";

import { useRaisedShadow } from "@/hooks/use-raised-shadow";

import type { Bio, BioSectionFormat } from "../schema";

type Icons = Record<
  BioSectionFormat,
  {
    icon: ReactElement;
    label: string;
  }
>;

const icons = {
  row: {
    icon: <List />,
    label: "Change to list view",
  },
  column: {
    icon: <Grid />,
    label: "Change to grid view",
  },
} satisfies Icons;

interface ItemProps {
  section: Bio["sections"][number];
  format: BioSectionFormat;
  color: Bio["color"];
}

function Item({ section, format, color }: ItemProps) {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();

  return (
    <Reorder.Item
      as="div"
      key={section.title}
      value={section}
      id={section.title}
      style={{ boxShadow, y, userSelect: "none", borderRadius: "2rem" }}
      dragListener={false}
      dragControls={dragControls}
    >
      <Section
        variant={format}
        title={section.title}
        dragControls={dragControls}
        reorderElement={<ReorderIcon />}
      >
        {section.links.map((link) => (
          <InfoLink
            key={link.siteUrl}
            variant={format}
            data={link}
            color={color}
          />
        ))}
      </Section>
    </Reorder.Item>
  );
}
interface BioProps {
  data: Bio;
}

export function Bio({ data }: BioProps) {
  const [format, setFormat] = useState<BioSectionFormat>("column");
  const [items, setItems] = useState(data.sections);

  const handleFormat = () => {
    setFormat((prevState) => (prevState === "column" ? "row" : "column"));
  };

  return (
    <Box width={["100%", 600]} marginY={24} marginX="auto" paddingX={[6, 0]}>
      <Flex gap={20} flexDirection="column">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Header
            title={data.title}
            description={data.description}
            imageUrl={data.imageUrl}
            color={data.color}
          >
            <Box position="absolute" right={0} bottom={0}>
              <Button
                ariaLabel={icons[format].label}
                icon={icons[format].icon}
                onClick={handleFormat}
              />
            </Box>
          </Header>
        </motion.div>
        <Reorder.Group as="div" values={items} axis="y" onReorder={setItems}>
          <AnimatePresence>
            <Flex gap={20} flexDirection="column">
              {items.map((section) => (
                <Item
                  key={section.title}
                  color={data.color}
                  format={format}
                  section={section}
                />
              ))}
            </Flex>
          </AnimatePresence>
        </Reorder.Group>
      </Flex>
    </Box>
  );
}
