import { TransitionInitialState } from "./TransitionProvider";

type Action =
  | { type: "setNavBarTransitionEnd"; payload: boolean }
  | { type: "setIsAboutTransitionEnd"; payload: boolean };

export const transitionReducer = (
  state: TransitionInitialState,
  action: Action,
): TransitionInitialState => {
  switch (action.type) {
    case "setNavBarTransitionEnd":
      return {
        ...state,
        isNavBarTransitionEnd: action.payload,
      };
    case "setIsAboutTransitionEnd":
      return {
        ...state,
        isAboutTransitionEnd: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
