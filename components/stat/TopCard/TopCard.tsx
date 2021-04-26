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
}

const TopCard: FC<TopCardProps> = (props) => {
  const { title, items, icon, color } = props;
  return (
    <Box shadow="base" rounded="base" p="8" bg={mode("white", "purple.800")}>
      {title && <Heading size="md">
        {title} {icon && <Icon as={icon} color={color} />}
      </Heading>}
      <Stack mt="10" spacing="0">
        {items.map((item, i) => (
          <TopCardItem {...item} key={i} />
        ))}
      </Stack>
    </Box>
  );
};

export default TopCard;
