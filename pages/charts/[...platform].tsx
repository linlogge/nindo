import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Box, Container, Grid, GridItem, Heading, List, ListItem, Stack } from "@chakra-ui/layout";
import RouterLink from "next/link";
import DefaultLayout from "@components/layout";
import { TopCard } from "@components/stat";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import PageNotFound from "pages/404";
import platforms from "@config/platforms";

export default function Charts({ data }) {
  const router = useRouter();
  const { platform } = router.query;
  const { charts, name, icon } = platforms.find((p) => p.id === platform[0])
  const filterOption = charts.find((c) => c.id === platform[1])

  if (router.isFallback) {
    return <PageNotFound />;
  }

  return (
    <>
      <Box as="section" mt="10">
        <Container maxW="container.xl">
          <Grid templateColumns="repeat(4, 1fr)" columnGap="10">
            <GridItem colSpan={1}>
              <Stack spacing="14">
                <Stack>
                  <Heading>{name}</Heading>
                  <Icon as={icon} color="purple.500" boxSize="10" />
                </Stack>
                <List spacing="2">
                  {charts.map(({ name, id }) => (
                    <ListItem>
                      <RouterLink href={`/charts/${platform[0]}/${id}`} passHref>
                        <Button as="a" colorScheme={id === platform[1] ? "purple" : undefined}>{name}</Button>
                      </RouterLink>
                    </ListItem>
                  ))}
                </List>
              </Stack>
            </GridItem>
            <GridItem colSpan={3}>
              <TopCard items={data} title={filterOption.name} />
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
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
  const { platform } = params;
  const data = await getData(`https://api.nindo.de/ranks/charts/${platform[0]}/${platform[1]}/big`);

  return {
    props: {
      data,
    },
    revalidate: 300,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let paths = [];
  platforms.forEach((platform) => {
    platform.charts.forEach((chart) => {
      paths.push([platform.id, chart.id])
    })
  })

  return {
    paths: paths.map((platform) => {
      return {
        params: {
          platform,
        },
      };
    }),
    fallback: true,
  };
};
