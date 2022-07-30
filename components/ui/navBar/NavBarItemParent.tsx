import { ListItem } from "@chakra-ui/react";
import { useContext } from "react";

import { ScrollToContext } from "../../../context";
import * as navBar from "../../../lib/navBar.json";

import { ItemNavBar } from "./ItemNavBar";

interface NavAction {
  about: () => void;
  why: () => void;
  works: () => void;
  present: () => void;
}

export const NavBarItemParent = () => {
  const { goToPresent, goToAboutMe, goToWhyNahue, goToWorks } =
    useContext(ScrollToContext);
  const { nav } = navBar;
  const navAction: NavAction = {
    about: goToAboutMe,
    why: goToWhyNahue,
    works: goToWorks,
    present: goToPresent,
  };

  return (
    <>
      {nav.map(({ url, number, text }) => (
        <ListItem key={url}>
          <ItemNavBar
            goTo={navAction[url as keyof NavAction]}
            number={number}
            text={text}
          />
        </ListItem>
      ))}
    </>
  );
};
