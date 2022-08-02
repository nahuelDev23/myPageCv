import { ReactNode, useContext } from "react";

import { TransitionContext } from "../../context";
import { MotionStack } from "../../animations/chakraComponents/MotionStack";
import { sectionsAppearEffect } from "../../animations";

interface Props {
  reference: any;
  children: ReactNode;
}

export const SectionLayout = ({ reference, children }: Props) => {
  const { initial, viewport, whileInView } = sectionsAppearEffect;
  const { isAboutTransitionEnd } = useContext(TransitionContext);

  return (
    <>
      {isAboutTransitionEnd && (
        <MotionStack
          ref={reference}
          initial={initial}
          my="8"
          scrollMarginTop="24"
          viewport={viewport}
          whileInView={whileInView}
        >
          {children}
        </MotionStack>
      )}
    </>
  );
};
