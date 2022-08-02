import { FC, ReactNode, useReducer } from "react";

import { TransitionContext } from "./TransitionContext";
import { transitionReducer } from "./transitionReducer";

interface Props {
  children: ReactNode;
}

export interface TransitionInitialState {
  isNavBarTransitionEnd: boolean;
  isAboutTransitionEnd: boolean;
}

const transitionInitialState: TransitionInitialState = {
  isNavBarTransitionEnd: false,
  isAboutTransitionEnd: false,
};

export const TransitionProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(
    transitionReducer,
    transitionInitialState,
  );

  const setIsNavBarTransitionEnd = () => {
    dispatch({
      type: "setNavBarTransitionEnd",
      payload: true,
    });
  };

  const setIsAboutTransitionEnd = () => {
    dispatch({
      type: "setIsAboutTransitionEnd",
      payload: true,
    });
  };

  return (
    <TransitionContext.Provider
      value={{
        ...state,
        setIsNavBarTransitionEnd,
        setIsAboutTransitionEnd,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};
