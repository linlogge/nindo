import { Box, Container, Heading } from "@chakra-ui/layout";
import { FC } from "react";

const Header: FC = (props) => {
  const { children } = props;

  return (
    <Box as="section" py="10">
      <Container maxW="container.xl">
        <Heading size="2xl">{children}</Heading>
      </Container>
    </Box>
  );
};

export default Header;
