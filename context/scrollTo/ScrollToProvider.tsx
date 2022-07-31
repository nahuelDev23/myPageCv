import { FC, ReactNode, useRef } from "react";

import { scrollAdapter } from "../../services";

import { ScrollToContext } from "./ScrollToContext";

interface Props {
  children: ReactNode;
}

export const ScrollToProvider: FC<Props> = ({ children }) => {
  const scrollToAboutMe = useRef();
  const scrollToWhyNahue = useRef();
  const scrollToWorks = useRef();
  const scrollToPresent = useRef();

  const goToAboutMe = () => {
    scrollAdapter(scrollToAboutMe);
  };

  const goToWhyNahue = () => {
    scrollAdapter(scrollToWhyNahue);
  };

  const goToWorks = () => {
    scrollAdapter(scrollToWorks);
  };

  const goToPresent = () => {
    scrollAdapter(scrollToPresent);
  };

  return (
    <ScrollToContext.Provider
      value={{
        goToAboutMe,
        goToPresent,
        goToWhyNahue,
        goToWorks,
        scrollToAboutMe,
        scrollToPresent,
        scrollToWhyNahue,
        scrollToWorks,
      }}
    >
      {children}
    </ScrollToContext.Provider>
  );
};
