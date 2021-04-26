import { Button, IconButton } from "@chakra-ui/button";
import { Box, Container, Flex, Heading, Stack } from "@chakra-ui/layout";
import { FC } from "react";
import { AiFillYoutube as YouTube, AiFillInstagram as Instagram, AiFillFire as Fire } from "react-icons/ai";
import { SiTiktok as TikTok, SiTwitter as Twitter, SiTwitch as Twitch } from "react-icons/si";
import { RiCoupon2Fill as Coupon } from "react-icons/ri";
import { Input } from "@chakra-ui/input";

const Header: FC = () => {
  return (
    <Box as="header" py="5">
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Heading color="purple.500">Nindo</Heading>
          <Stack direction="row">
            <IconButton icon={<YouTube />} aria-label="YouTube" variant="ghost" colorScheme="purple" />
            <IconButton icon={<Instagram />} aria-label="Instagram" variant="ghost" colorScheme="purple" />
            <IconButton icon={<TikTok />} aria-label="TikTok" variant="ghost" colorScheme="purple" />
            <IconButton icon={<Twitter />} aria-label="Twitter" variant="ghost" colorScheme="purple" />
            <IconButton icon={<Twitch />} aria-label="Twitch" variant="ghost" colorScheme="purple" />
          </Stack>
          <Stack direction="row">
            <Button leftIcon={<Fire />} variant="ghost" colorScheme="purple">Viral</Button>
            <Button leftIcon={<Coupon />} variant="ghost" colorScheme="purple">Rabatt</Button>
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
