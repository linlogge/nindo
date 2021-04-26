import { Box, Stack, Text, Link } from "@chakra-ui/layout";
import { FC } from "react";

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <Box as="footer" color="gray.700" py="24">
      <Stack align="center" spacing="5">
        <Stack direction="row" spacing="8">
          <Link href="/kontakt">Kontakt</Link>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <Link href="/hilfe">Hilfe</Link>
        </Stack>
        <Text color="gray.500">&copy; {year} Nindo GmbH</Text>
      </Stack>
    </Box>
  )
}

export default Footer;
