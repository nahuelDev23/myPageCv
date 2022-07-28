import { Box } from "@chakra-ui/react";
import { EmblaOptionsType } from "embla-carousel-react";

import { CodeExample } from "../codeExample";

import s from "./carousel.module.css";

type PropType = {
  options?: EmblaOptionsType;
  slidesCode: any;
  viewportRef: any;
};

export const Carousel = (props: PropType) => {
  const { slidesCode, viewportRef } = props;

  return (
    <>
      <div ref={viewportRef} className={s.embla}>
        <Box className={s.embla__container}>
          {slidesCode.map(
            (typeOfCodeExample: { code: string }, index: number) => (
              <Box key={index} className={s.embla__slide}>
                <CodeExample code={typeOfCodeExample.code} />
              </Box>
            ),
          )}
        </Box>
      </div>
    </>
  );
};
