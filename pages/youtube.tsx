import { SimpleGrid, Box, Container } from "@chakra-ui/layout";
import { Header } from "@components/core";
import DefaultLayout from "@components/layout";

export default function YouTube() {
  return (
    <>
      <Header>YouTube</Header>
      <Box as="section">
        <Container maxW="container.xl"></Container>
      </Box>
    </>
  );
}

YouTube.Layout = DefaultLayout;
