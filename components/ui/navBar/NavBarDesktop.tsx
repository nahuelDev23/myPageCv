import { useContext } from "react";

import { listNavBarDesktop, MotionUnorderedList } from "../../../animations";
import { TransitionContext } from "../../../context";

import { NavBarItemParent } from "./NavBarItemParent";

export const NavBarDesktop = () => {
  const { setIsNavBarTransitionEnd } = useContext(TransitionContext);

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
      onAnimationComplete={() => setIsNavBarTransitionEnd()}
    >
      {<NavBarItemParent />}
    </MotionUnorderedList>
  );
};
