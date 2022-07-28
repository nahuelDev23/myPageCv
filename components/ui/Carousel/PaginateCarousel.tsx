import { FC, useCallback, useEffect, useState } from "react";
import { Flex, Stack } from "@chakra-ui/react";

import { DotButton } from "./DotButton";

interface Props {
  slides: any;
  emblaApi: any;
}

export const PaginateCarousel: FC<Props> = ({ slides, emblaApi }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollTo = useCallback(
    (index: number) => {
      emblaApi && emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <Flex justifyContent="center" mt="8">
      <Stack direction="row">
        {slides.map((_: any, index: number) => (
          <DotButton
            key={`${index}`}
            selected={selectedIndex === index}
            onClick={() => scrollTo(index)}
          />
        ))}
      </Stack>
    </Flex>
  );
};
