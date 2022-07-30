import { FC, ReactNode, useRef } from "react";

import { ScrollToContext } from "./ScrollToContext";

interface Props {
  children: ReactNode;
}
interface ScrollIntoView {
  behavior: string;
}

interface Generic {
  scrollIntoView: ({ behavior }: ScrollIntoView) => void;
}

export const ScrollToProvider: FC<Props> = ({ children }) => {
  const scrollToAboutMe = useRef();
  const scrollToWhyNahue = useRef();
  const scrollToWorks = useRef();
  const scrollToPresent = useRef();

  // todo adapter scrollIntoView
  const goToAboutMe = () => {
    (scrollToAboutMe.current! as Generic).scrollIntoView({
      behavior: "smooth",
    });
  };

  const goToWhyNahue = () => {
    (scrollToWhyNahue.current! as Generic).scrollIntoView({
      behavior: "smooth",
    });
  };

  const goToWorks = () => {
    (scrollToWorks.current! as Generic).scrollIntoView({
      behavior: "smooth",
    });
  };

  const goToPresent = () => {
    (scrollToPresent.current! as Generic).scrollIntoView({
      behavior: "smooth",
    });
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
