import { FC, ReactNode, useState } from "react";

import { TransitionContext } from "./TransitionContext";

interface Props {
  children: ReactNode;
}

export const TransitionProvider: FC<Props> = ({ children }) => {
  const [navBarTransitionEnd, setNavBarTransitionEnd] =
    useState<boolean>(false);

  return (
    <TransitionContext.Provider
      value={{
        navBarTransitionEnd,
        setNavBarTransitionEnd,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};
