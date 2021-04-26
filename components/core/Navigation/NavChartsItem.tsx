import Link from "next/link";
import { FC, ReactElement } from "react";
import { IconButton } from "@chakra-ui/button";

interface NavChartsItemProps {
  href: string;
  label: string;
  icon: ReactElement;
}

const NavChartsItem: FC<NavChartsItemProps> = (props) => {
  const { href, icon, label } = props;

  return (
    <Link href={href} passHref>
      <IconButton as="a" icon={icon} aria-label={label} variant="ghost" colorScheme="purple" />
    </Link>
  );
};

export default NavChartsItem;
