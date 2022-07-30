import { UnorderedList } from "@chakra-ui/react";

import { NavBarItemParent } from "./NavBarItemParent";

export const NavBarDesktop = () => {
  return (
    <UnorderedList
      display={{ base: "none", sm: "flex" }}
      gap="8"
      justifyContent="flex-end"
      listStyleType="none"
    >
      <NavBarItemParent />
    </UnorderedList>
  );
};
