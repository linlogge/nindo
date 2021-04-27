import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Box, Container, Heading, Stack, Text, Wrap } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import { Instagram, TikTok, Twitch, Twitter, YouTube } from "@components/icon";
import DefaultLayout from "@components/layout";
import { GetServerSideProps } from "next";
import { useColorModeValue as mode } from "@chakra-ui/color-mode";
import { NextSeo } from "next-seo";

export default function Artist({ artist }) {
  const { name, genres, avatarUrl, channels } = artist;

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
                {channels.map((channel, i) => {
                  switch (channel.platform) {
                    case "youtube": {
                      return (
                        <Button colorScheme="red" variant="ghost" leftIcon={<YouTube />} key={i}>
                          {channel.name}
                        </Button>
                      );
                    }
                    case "instagram": {
                      return (
                        <Button colorScheme="purple" variant="ghost" leftIcon={<Instagram />} key={i}>
                          {channel.name}
                        </Button>
                      );
                    }
                    case "tiktok": {
                      return (
                        <Button colorScheme="pink" variant="ghost" leftIcon={<TikTok />} key={i}>
                          {channel.name}
                        </Button>
                      );
                    }
                    case "twitter": {
                      return (
                        <Button colorScheme="blue" variant="ghost" leftIcon={<Twitter />} key={i}>
                          {channel.name}
                        </Button>
                      );
                    }
                    case "twitch": {
                      return (
                        <Button colorScheme="purple" variant="ghost" leftIcon={<Twitch />} key={i}>
                          {channel.name}
                        </Button>
                      );
                    }
                  }
                })}
              </Wrap>
            </Stack>
          </Box>
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
