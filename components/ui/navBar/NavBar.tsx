import { UnorderedList, ListItem, Stack } from "@chakra-ui/react";
import { useContext } from "react";

import { ScrollToContext } from "../../../context/scrollTo/ScrollToContext";
import { nav } from "../../../lib/navBar.json";

import { ItemNavBar } from "./ItemNavBar";

interface NavAction {
  about: () => void;
  why: () => void;
  works: () => void;
  present: () => void;
}

export const NavBar = () => {
  const { goToPresent, goToAboutMe, goToWhyNahue, goToWorks } =
    useContext(ScrollToContext);

  const navAction: NavAction = {
    about: goToAboutMe,
    why: goToWhyNahue,
    works: goToWorks,
    present: goToPresent,
  };

  return (
    <Stack my="8">
      <UnorderedList>
        {nav.map(({ url, number, text }) => (
          <ListItem key={url}>
            <ItemNavBar
              goTo={navAction[url as keyof NavAction]}
              number={number}
              text={text}
            />
          </ListItem>
        ))}
      </UnorderedList>
    </Stack>
  );
};
