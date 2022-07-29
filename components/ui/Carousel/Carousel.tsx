import { Stack } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";

import { CodeExample } from "../codeExample";

import { PaginateCarousel } from "./PaginateCarousel";

interface slideCodeProperties {
  code: string;
}
interface Props {
  slidesCode: slideCodeProperties[];
}

interface TypeOfCodeExample {
  code: string;
}

export const Carousel = ({ slidesCode }: Props) => {
  const [viewportRef, emblaApi] = useEmblaCarousel();

  return (
    <>
      <Stack ref={viewportRef} maxW="100vw" overflow="hidden">
        <Stack direction="row">
          {slidesCode.map(({ code }: TypeOfCodeExample, index: number) => (
            <Stack
              key={index}
              aria-label="slidesCode"
              flexBasis="100%"
              flexGrow="0"
              flexShrink="0"
              maxWidth="100%"
              ml="10px"
            >
              <CodeExample code={code} />
            </Stack>
          ))}
        </Stack>
      </Stack>
      <PaginateCarousel emblaApi={emblaApi} slides={slidesCode} />
    </>
  );
};
