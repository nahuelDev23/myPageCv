import { Link, ListItem } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

import { primaryColor } from "../../../theme/theme_base";

interface Props {
  children: ReactNode;
  url: string;
}

export const ItemOfList: FC<Props> = ({ children, url }) => {
  return (
    <ListItem
      _hover={{
        transform: "translateY(-4px)",
      }}
      transition=".2s all linear"
    >
      <Link
        _hover={{
          color: primaryColor,
        }}
        href={url}
        rel="noreferrer"
        target="_blank"
        transition=".4s all linear"
      >
        {children}
      </Link>
    </ListItem>
  );
};
