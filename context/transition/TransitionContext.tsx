import { createContext } from "react";

interface Props {
  isNavBarTransitionEnd: boolean;
  isAboutTransitionEnd: boolean;
  setIsNavBarTransitionEnd: () => void;
  setIsAboutTransitionEnd: () => void;
}

export const TransitionContext = createContext({} as Props);
