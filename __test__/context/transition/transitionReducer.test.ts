import { transitionReducer } from "../../../context/";
describe("Test transitionReducer", () => {
  const initialState = {
    isNavBarTransitionEnd: false,
    isAboutTransitionEnd: false,
  };

  test("should return default state", () => {
    const newState = transitionReducer(initialState, {} as any);

    expect(newState).toEqual({
      isAboutTransitionEnd: false,
      isNavBarTransitionEnd: false,
    });
  });

  test("should turn true isNavBarTransitionEnd ", () => {
    const action = {
      type: "setNavBarTransitionEnd",
      payload: true,
    };
    const newState = transitionReducer(initialState, action as any);

    expect(newState).toEqual({
      isAboutTransitionEnd: false,
      isNavBarTransitionEnd: true,
    });
  });

  test("should turn true isAboutTransitionEnd ", () => {
    const action = {
      type: "setIsAboutTransitionEnd",
      payload: true,
    };
    const newState = transitionReducer(initialState, action as any);

    expect(newState).toEqual({
      isAboutTransitionEnd: true,
      isNavBarTransitionEnd: false,
    });
  });
});
