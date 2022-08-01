import { listNavBarDesktop, MotionUnorderedList } from "../../../animations";

import { NavBarItemParent } from "./NavBarItemParent";

export const NavBarDesktop = () => {
  return (
    <MotionUnorderedList
      animate="visible"
      display={{ base: "none", sm: "flex" }}
      gap="8"
      initial="hidden"
      justifyContent="flex-end"
      listStyleType="none"
      overflow="hidden"
      variants={listNavBarDesktop}
    >
      <NavBarItemParent />
    </MotionUnorderedList>
  );
};
