import Icon from "@chakra-ui/icon";
import { Badge, Heading, LinkBox, LinkOverlay, Stack } from "@chakra-ui/layout";
import { YouTube } from "@components/icon";
import { getPlatformById } from "@lib/platforms";
import { FC } from "react";
import Channel from "./Channel";
import PerUnit from "./PerUnit";
import Week from "./Week";

interface ChannelCardProps {
  channel: any;
}

const ChannelCard: FC<ChannelCardProps> = (props) => {
  const { channel } = props;
  const { icon: PlatformIcon, toReadableName, colorScheme: platformColorScheme } = getPlatformById(channel.platform);
  const name = toReadableName(channel);

  return (
    <Stack spacing="5">
      <LinkBox as={Stack} direction="row" align="center">
        <Icon as={PlatformIcon} color={`${platformColorScheme}.500`} />
        <LinkOverlay href="#">
          <Heading size="md">{name}</Heading>
        </LinkOverlay>
        <Badge colorScheme={platformColorScheme}>Zum Kanal</Badge>
      </LinkBox>
      <Channel />
      <Heading size="sm">Pro Video</Heading>
      <PerUnit />
      <Heading size="sm">Letzte 7 Tage</Heading>
      <Week />
    </Stack>
  );
};

export default ChannelCard;
