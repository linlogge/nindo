import { Box, Container } from "@chakra-ui/layout";
import { Header } from "@components/core";
import DefaultLayout from "@components/layout";
import { TopCard } from "@components/stat";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import PageNotFound from "pages/404";

export default function Charts({ data }) {
  const router = useRouter();
  const { platform } = router.query

  if (router.isFallback) {
    return <PageNotFound />
  }

  return (
    <>
      <Header>{platform}</Header>
      <Box as="section">
        <Container maxW="container.md">
          <TopCard items={data} title="Abonnenten" />
        </Container>
      </Box>
    </>
  )
}

Charts.Layout = DefaultLayout;

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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const { platform } = params;
  const data = await getData("https://api.nindo.de/ranks/charts/youtube/rankViews/big");

  return {
    props: {
      data
    },
    revalidate: 300,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ["youtube", "instagram", "tiktok", "twitter", "twitch"];

  return {
    paths: paths.map(platform => {
      return {
        params: {
          platform,
        },
      };
    }),
    fallback: true,
  };
};
