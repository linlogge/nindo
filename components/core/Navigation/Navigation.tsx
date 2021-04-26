import { Box, Container, Flex, Heading, Stack } from "@chakra-ui/layout";
import { FC } from "react";
import { AiFillYoutube as YouTube, AiFillInstagram as Instagram, AiFillFire as Fire } from "react-icons/ai";
import { SiTiktok as TikTok, SiTwitter as Twitter, SiTwitch as Twitch } from "react-icons/si";
import { RiCoupon2Fill as Coupon } from "react-icons/ri";
import { Input } from "@chakra-ui/input";
import NavChartsItem from "./NavChartsItem";
import NavItem from "./NavItem";

const Header: FC = () => {
  return (
    <Box as="header" py="5">
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Heading color="purple.500">Nindo</Heading>
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
          <Box>
            <Input placeholder="Suchen..." variant="filled" />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header;
