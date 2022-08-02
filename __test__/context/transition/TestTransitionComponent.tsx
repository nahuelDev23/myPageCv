import { useContext } from "react";

import { TransitionContext } from "../../../context/transition/TransitionContext";

export const TestComponent = () => {
  const {
    isAboutTransitionEnd,
    isNavBarTransitionEnd,
    setIsAboutTransitionEnd,
    setIsNavBarTransitionEnd,
  } = useContext(TransitionContext);

  return (
    <div>
      <button onClick={setIsAboutTransitionEnd}>onAbout</button>
      <button onClick={setIsNavBarTransitionEnd}>onNabBAr</button>
      {isNavBarTransitionEnd && <h1>navbar</h1>}
      {isAboutTransitionEnd && <h1>about</h1>}
    </div>
  );
};
