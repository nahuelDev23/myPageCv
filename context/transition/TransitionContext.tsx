import { createContext } from "react";

export interface TransitionContextProps {
  isNavBarTransitionEnd: boolean;
  isAboutTransitionEnd: boolean;
  setIsNavBarTransitionEnd: () => void;
  setIsAboutTransitionEnd: () => void;
}

export const TransitionContext = createContext({} as TransitionContextProps);
