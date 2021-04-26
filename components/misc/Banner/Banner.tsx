import { Button } from "@chakra-ui/button";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Badge, Box, Heading, Stack, Text } from "@chakra-ui/layout";
import { FC } from "react";

const Banner: FC = () => {
  return (
    <Box shadow="base" rounded="lg" bg="purple.500" p="10">
      <Stack align="center" spacing="5">
        <Text color="white">
          Für Agenturen, Managements &amp; Brands <Badge colorScheme="purple">Neu</Badge>
        </Text>
        <Heading color="white" textAlign="center" size="2xl">
          <Text as="span" color="purple.200">
            Nindo
          </Text>{" "}
          Professional
        </Heading>
        <Button
          as="a"
          href="https://your.nindo.de"
          target="_blank"
          colorScheme="pink"
          size="lg"
          rightIcon={<ArrowForwardIcon />}
        >
          Mehr erfahren
        </Button>
      </Stack>
    </Box>
  );
};

export default Banner;
