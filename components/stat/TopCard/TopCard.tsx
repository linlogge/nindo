import Icon from "@chakra-ui/icon";
import { useColorModeValue as mode } from "@chakra-ui/color-mode";
import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
import { FC } from "react";
import TopCardItem, { TopCardItemProps } from "./TopCardItem";

interface TopCardProps {
  items: TopCardItemProps[];
  title?: string;
  icon?: FC;
  color?: string;
  description?: string;
}

const TopCard: FC<TopCardProps> = (props) => {
  const { title, items, icon, color, description } = props;
  return (
    <Box shadow="base" rounded="lg" p="8" bg={mode("white", "purple.800")}>
      {title && (
        <Heading size="md">
          {title} {icon && <Icon as={icon} color={color} />}
        </Heading>
      )}
      {description && <Text mt="1">{description}</Text>}
      <Stack mt="10" spacing="0">
        {items.map((item, i) => (
          <TopCardItem {...item} key={i} />
        ))}
      </Stack>
    </Box>
  );
};

export default TopCard;
