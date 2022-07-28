import { FC, useCallback, useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

import style from "./carousel.module.css";

interface DotButtonProps {
  selected: boolean;
  onClick: () => void;
}

interface Props {
  slides: any;
  emblaApi: any;
}

const DotButton: FC<DotButtonProps> = ({ selected, onClick }) => (
  <button
    className={`${style.embla__dot} ${selected ? style.isSelected : ""}`}
    type="button"
    onClick={onClick}
  />
);

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
      <Box className={style.embla__dots}>
        {slides.map((_: any, index: number) => (
          <DotButton
            key={`${index}`}
            selected={selectedIndex === index}
            onClick={() => scrollTo(index)}
          />
        ))}
      </Box>
    </Flex>
  );
};
