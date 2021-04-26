import { Button } from "@chakra-ui/button";
import { Badge, Box, Heading, Stack, Text } from "@chakra-ui/layout";
import { FC } from "react";

const Banner: FC = () => {
  return (
    <Box shadow="base" rounded="base" bg="purple.500" p="10">
      <Stack align="center" spacing="5">
        <Text color="white">
          Für Agenturen, Management & Brands <Badge colorScheme="purple">Neu</Badge>
        </Text>
        <Heading color="white" textAlign="center" size="2xl">
          <Text as="span" color="purple.200">
            Nindo
          </Text>{" "}
          Professional
        </Heading>
        <Button colorScheme="pink" size="lg">
          Mehr erfahren
        </Button>
      </Stack>
    </Box>
  );
};

export default Banner;
