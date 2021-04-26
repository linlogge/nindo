import { GetStaticProps } from "next";
import { Box, Container, Grid, GridItem, SimpleGrid } from "@chakra-ui/layout";
import { Instagram, TikTok, Twitter, YouTube, Twitch } from "@components/icon";
import DefaultLayout from "@components/layout";
import { Banner } from "@components/misc";
import { TopCard } from "@components/stat";

export default function Home(data) {
  const { youtube, instagram, tikTok, twitter, twitch } = data;

  return (
    <>
      <Box as="section" mt="10">
        <Container maxW="container.xl">
          <Banner />
        </Container>
      </Box>
      <Box as="section" mt="10">
        <Container maxW="container.xl">
          <Grid templateColumns="repeat(6, 1fr)" gap="5">
            <GridItem colSpan={{ base: 6, md: 3, xl: 2 }}>
              <TopCard
                items={youtube}
                title="YouTube"
                color="red.500"
                icon={YouTube}
                description="Nach Views der letzten 5 Tage"
              />
            </GridItem>
            <GridItem colSpan={{ base: 6, md: 3, xl: 2 }}>
              <TopCard
                items={instagram}
                title="Instagram"
                color="purple.500"
                icon={Instagram}
                description="Nach Likes der letzten 5 Tage"
              />
            </GridItem>
            <GridItem colSpan={{ base: 6, md: 3, xl: 2 }}>
              <TopCard
                items={tikTok}
                title="TikTok"
                color="pink.500"
                icon={TikTok}
                description="Nach Likes der letzten 5 Tage"
              />
            </GridItem>
            <GridItem colSpan={{ base: 6, md: 3 }}>
              <TopCard
                items={twitter}
                title="Twitter"
                color="blue.500"
                icon={Twitter}
                description="Nach Likes der letzten 5 Tage"
              />
            </GridItem>
            <GridItem colSpan={{ base: 6, xl: 3 }}>
              <TopCard
                items={twitch}
                title="Twitch"
                color="purple.500"
                icon={Twitch}
                description="Nach Zuschauern der letzten 5 Tage"
              />
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

Home.Layout = DefaultLayout;

async function getData(url: string) {
  return await fetch(url)
    .then((res) => res.json())
    .then((data) =>
      data.map(({ rank, artistName, avatar, value, artistID }) => ({
        rank,
        name: artistName,
        avatarUrl: avatar,
        value,
        artistId: artistID,
      }))
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const youtube = await getData("https://api.nindo.de/ranks/charts/youtube/rankLikes/small");
  const instagram = await getData("https://api.nindo.de/ranks/charts/instagram/rankLikes/small");
  const tikTok = await getData("https://api.nindo.de/ranks/charts/tiktok/rankLikes/small");
  const twitter = await getData("https://api.nindo.de/ranks/charts/twitter/rankLikes/small");
  const twitch = await getData("https://api.nindo.de/ranks/charts/twitch/rankViewer/small");

  return {
    props: {
      youtube,
      instagram,
      tikTok,
      twitter,
      twitch,
    },
    revalidate: 300,
  };
};
