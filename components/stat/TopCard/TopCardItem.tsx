import { FC } from "react";
import { Center, LinkBox, LinkOverlay, Stack, Text } from "@chakra-ui/layout";
import { abbreviateNumber } from "@lib/numbers";
import { Avatar } from "@chakra-ui/avatar";
import RouterLink from "next/link";

export interface TopCardItemProps {
  avatarUrl: string;
  rank: number;
  name: string;
  value: number;
  artistId: string;
}

const TopCardItem: FC<TopCardItemProps> = (props) => {
  const { avatarUrl, name, rank, value, artistId } = props;

  return (
    <LinkBox py="1">
      <Stack direction="row" align="center" spacing="4">
        <Avatar src={avatarUrl} />
        <Center w="5">
          <Text>{rank}</Text>
        </Center>
        <Stack direction="row" align="center" justify="space-between" w="full">
          <RouterLink href={`/artist/${artistId}`} passHref>
            <LinkOverlay _hover={{ color: "purple.500" }}>
              <Text fontWeight="bold" isTruncated>
                {name}
              </Text>
            </LinkOverlay>
          </RouterLink>
          <Text>{abbreviateNumber(value)}</Text>
        </Stack>
      </Stack>
    </LinkBox>
  );
};

export default TopCardItem;
