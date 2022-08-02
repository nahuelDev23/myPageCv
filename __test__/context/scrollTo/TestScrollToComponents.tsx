import { useContext } from "react";

import { ScrollToContext } from "../../../context/scrollTo/ScrollToContext";
import { NavAction, Section } from "../../../interface";

export const TestComponent = ({ section }: Section) => {
  const {
    goToAboutMe,
    scrollToAboutMe,
    goToWhyNahue,
    goToWorks,
    goToPresent,
    scrollToPresent,
    scrollToWhyNahue,
    scrollToWorks,
  } = useContext(ScrollToContext);

  const navAction: NavAction = {
    about: goToAboutMe,
    why: goToWhyNahue,
    works: goToWorks,
    present: goToPresent,
  };

  const refAction: NavAction = {
    about: scrollToAboutMe,
    why: scrollToWhyNahue,
    works: scrollToWorks,
    present: scrollToPresent,
  };

  return (
    <div>
      <button onClick={navAction[section as keyof NavAction]}>GoTo</button>
      <div ref={refAction[section as keyof NavAction]}>hey!</div>
    </div>
  );
};
