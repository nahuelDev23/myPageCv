import { Grid, Stack, Text } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";

import { Highlighter, Carousel } from "../ui";
import { HeadTitle } from "../ui/HeadTitle";
import { slidesCode } from "../ui/codeExample/codeExampleText";

export const Present = () => {
  const [viewportRef, emblaApi] = useEmblaCarousel();

  return (
    <Stack my="8">
      <HeadTitle number="04" title="Qué estoy haciendo en la actualidad?" />
      <Grid
        gap="8"
        gridTemplateColumns={{ base: "repeat(1,1fr)", sm: "40% 60%" }}
      >
        <Stack>
          <Text>
            Actualmente estoy trabajando en relación de dependencia en el area
            de IT, llevando ya 9 años de experiencia.
          </Text>
          <Text>
            En mi tiempo libre hago proyectos FullStack de manera freelance
            utilizando las tecnologías que ya mencione anteriormente ya que es
            lo que realmente me apasiona.
          </Text>
          <Text>
            Cuando no estoy trabajando con ningún cliente me dedico a crear
            proyectos propios que me ayuden a reforzar conceptos y que me
            obligan a enfrentarme a nuevos desafíos y situaciones que de otra
            manera no se me presentarían.
          </Text>
          <Text>
            En el ultimo tiempo estuve haciendo hincapié en mejorar mi criterio
            en lo referente al{" "}
            <Highlighter text=" Clean Code,Testing y patrones de diseño" />.
          </Text>
        </Stack>
        <Stack>
          <Carousel slidesCode={slidesCode} viewportRef={viewportRef} />
        </Stack>
      </Grid>
    </Stack>
  );
};
