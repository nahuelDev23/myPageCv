import { MutableRefObject } from "react";

interface ScrollIntoView {
  behavior: string;
}

interface Generic {
  scrollIntoView: ({ behavior }: ScrollIntoView) => void;
}

export const scrollAdapter = (ref: MutableRefObject<undefined>) => {
  (ref.current! as Generic).scrollIntoView({
    behavior: "smooth",
  });
};
