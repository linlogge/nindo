import Link from "next/link";
import { FC } from "react";
import { IconButton } from "@chakra-ui/button";
import { useRouter } from "next/router";
import { platforms } from "@lib/platforms";
import { Stack } from "@chakra-ui/layout";

const NavChartsItem: FC = () => {
  const { query } = useRouter();

  return (
    <Stack direction="row">
      {platforms.map(({ icon: Icon, id, name, chartsOptions }, i) => (
        <Link href={`/charts/${id}/${chartsOptions[0][1]}`} passHref key={i}>
          <IconButton
            as="a"
            icon={<Icon />}
            aria-label={name}
            variant="ghost"
            colorScheme="purple"
            isActive={query.platform && query.platform[0] === id}
          />
        </Link>
      ))}
    </Stack>
  );
};

export default NavChartsItem;
