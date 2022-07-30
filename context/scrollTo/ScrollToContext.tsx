import { createContext } from "react";

interface Props {
  scrollToPresent: any;
  scrollToAboutMe: any;
  scrollToWhyNahue: any;
  scrollToWorks: any;

  goToAboutMe: () => void;
  goToWhyNahue: () => void;
  goToWorks: () => void;
  goToPresent: () => void;
}

export const ScrollToContext = createContext({} as Props);
