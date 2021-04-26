import Link from "next/link";
import { FC, ReactElement } from "react";
import { Button } from "@chakra-ui/button";

interface NavItemProps {
  href: string;
  icon: ReactElement;
}

const NavItem: FC<NavItemProps> = (props) => {
  const { href, icon, children } = props;

  return (
    <Link href={href} passHref>
      <Button as="a" leftIcon={icon} variant="ghost" colorScheme="purple">
        {children}
      </Button>
    </Link>
  );
};

export default NavItem;
