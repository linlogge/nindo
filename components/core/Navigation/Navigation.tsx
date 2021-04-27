import { Box, Container, Flex, Heading, Stack } from "@chakra-ui/layout";
import { FC } from "react";
import { YouTube, Instagram, TikTok, Twitter, Twitch, Moon, Sun, Fire, Coupon } from "@components/icon";
import NavChartsItem from "./NavChartsItem";
import NavItem from "./NavItem";
import { IconButton } from "@chakra-ui/button";
import { useColorMode, useColorModeValue as mode } from "@chakra-ui/color-mode";
import Link from "next/link";
import SearchForm from "./SearchForm";
import platforms from "@config/platforms";

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
          <Stack direction="row">
            {platforms.map(({ icon: Icon, name, id, charts }, i) => (
              <NavChartsItem icon={<Icon />} label={name} href={`/charts/${id}/${charts[0].id}`} key={i} />
            ))}
          </Stack>
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
