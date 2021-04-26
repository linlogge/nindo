import { Box, Container } from "@chakra-ui/layout";
import DefaultLayout from "@components/layout";
import { Banner } from "@components/misc";

export default function Home() {
  return (
    <Box as="section" mt="10">
      <Container maxW="container.xl">
        <Banner />
      </Container>
    </Box>
  );
}

Home.Layout = DefaultLayout;
