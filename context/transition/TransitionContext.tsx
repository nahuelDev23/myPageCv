import { createContext, Dispatch, SetStateAction } from "react";

interface Props {
  navBarTransitionEnd: boolean;
  setNavBarTransitionEnd: Dispatch<SetStateAction<boolean>>;
}

export const TransitionContext = createContext({} as Props);
