import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Box, Container, Heading, Stack, Text, Wrap } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import DefaultLayout from "@components/layout";
import { GetServerSideProps } from "next";
import { useColorModeValue as mode } from "@chakra-ui/color-mode";
import { NextSeo } from "next-seo";
import { ChannelCard } from "@components/stat";
import { FC, useState } from "react";
import { getPlatformById, PlatformId } from "@lib/platforms";

interface PlatformButtonProps {
  platformId: PlatformId;
  channel: any;
  onClick: () => void;
  isActive: boolean;
}

const PlatformButton: FC<PlatformButtonProps> = ({ platformId, onClick, channel, isActive }) => {
  const { icon: Icon, colorScheme, toReadableName } = getPlatformById(platformId);

  return (
    <Button colorScheme={colorScheme} variant="ghost" isActive={isActive} leftIcon={<Icon />} onClick={onClick}>
      {toReadableName(channel)}
    </Button>
  );
};

export default function Artist({ artist }) {
  const { name, genres, avatarUrl, channels } = artist;

  const [activeChannel, setActiveChannel] = useState(0);

  return (
    <>
      <NextSeo title={name} />
      <Box as="section" mt="10">
        <Container maxW="container.xl">
          <Box rounded="lg" shadow="base" bg={mode("white", "purple.800")} p="8">
            <Stack spacing="5">
              <Stack direction="row" align="center" spacing="5">
                <Avatar size="xl" src={avatarUrl} />
                <Stack justify="center" spacing="2">
                  <Heading>{name}</Heading>
                  {genres && (
                    <Stack direction="row">
                      {genres.map((genre) => (
                        <Tag colorScheme="purple">{genre}</Tag>
                      ))}
                    </Stack>
                  )}
                </Stack>
              </Stack>
              <Wrap>
                {channels.map((channel, i) => (
                  <PlatformButton
                    key={i}
                    platformId={channel.platform}
                    onClick={() => setActiveChannel(i)}
                    channel={channel}
                    isActive={channel.id === channels[activeChannel].id}
                  />
                ))}
              </Wrap>
            </Stack>
          </Box>
        </Container>
      </Box>
      <Box as="section" mt="20">
        <Container maxW="container.xl">
          <ChannelCard channel={channels[activeChannel]} />
        </Container>
      </Box>
    </>
  );
}

Artist.Layout = DefaultLayout;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id: artistId } = params;
  const data = await fetch(`https://api.nindo.de/artist/${artistId}`).then((res) => res.json());
  const { name, avatar, _genres, _channels } = data;

  const artist = { name, avatarUrl: avatar, genres: _genres.map((genre) => genre.name), channels: _channels };

  return {
    props: {
      artist,
    },
  };
};
