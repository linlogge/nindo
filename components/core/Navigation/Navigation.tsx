import { Box, Container, Flex, Heading, Stack } from "@chakra-ui/layout";
import { FC } from "react";
import { YouTube, Instagram, TikTok, Twitter, Twitch, Moon, Sun, Fire, Coupon } from "@components/icon";
import { Input } from "@chakra-ui/input";
import NavChartsItem from "./NavChartsItem";
import NavItem from "./NavItem";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import Link from "next/link";

const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="header" py="5">
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Link href="/" passHref>
            <Heading as="a" color="purple.500">Nindo</Heading>
          </Link>
          <Stack direction="row">
            <NavChartsItem icon={<YouTube />} label="YouTube" href="/youtube" />
            <NavChartsItem icon={<Instagram />} label="Instagram" href="/instagram" />
            <NavChartsItem icon={<TikTok />} label="TikTok" href="/tiktok" />
            <NavChartsItem icon={<Twitter />} label="Twitter" href="/twitter" />
            <NavChartsItem icon={<Twitch />} label="Twitch" href="/twitch" />
          </Stack>
          <Stack direction="row">
            <NavItem icon={<Fire />} href="/viral">Viral</NavItem>
            <NavItem icon={<Coupon />} href="/viral">Rabatt</NavItem>
          </Stack>
          <Stack direction="row">
            <Input placeholder="Suchen..." variant="filled" />
            <IconButton aria-label="Dark-Mode ein/ausschalten" icon={colorMode === "dark" ? <Sun /> : <Moon />} variant="ghost" colorScheme="purple" onClick={toggleColorMode} />
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header;
