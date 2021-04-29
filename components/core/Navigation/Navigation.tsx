import { Box, Container, Flex, Heading, Stack } from "@chakra-ui/layout";
import { FC } from "react";
import { Moon, Sun, Fire, Coupon } from "@components/icon";
import NavChartsItems from "./NavChartsItems";
import NavItem from "./NavItem";
import { IconButton } from "@chakra-ui/button";
import { useColorMode, useColorModeValue as mode } from "@chakra-ui/color-mode";
import Link from "next/link";
import SearchForm from "./SearchForm";

const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="header" py="5">
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Link href="/" passHref>
            <Heading as="a" color="purple.500">
              Nindo
            </Heading>
          </Link>
          <NavChartsItems />
          <Stack direction="row">
            <NavItem icon={<Fire />} href="/viral">
              Viral
            </NavItem>
            <NavItem icon={<Coupon />} href="/viral">
              Rabatt
            </NavItem>
          </Stack>
          <Stack direction="row">
            <SearchForm />
            <IconButton
              aria-label="Dark-Mode ein/ausschalten"
              icon={colorMode === "dark" ? <Sun /> : <Moon />}
              variant="ghost"
              colorScheme="purple"
              onClick={toggleColorMode}
            />
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
