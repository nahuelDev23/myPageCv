import { Grid, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";

import { Highlighter, Carousel, DividerPhrases } from "../ui";
import { HeadTitle } from "../ui/HeadTitle";
import { slidesCode } from "../ui/codeExample/codeExampleText";
import { ScrollToContext } from "../../context/scrollTo/ScrollToContext";
import { SectionLayout } from "../Layout";

export const Present = () => {
  const { scrollToPresent } = useContext(ScrollToContext);

  return (
    <SectionLayout reference={scrollToPresent}>
      <HeadTitle number="04" title="Qué estoy haciendo en la actualidad?" />
      <Stack>
        <Grid
          gap="8"
          gridTemplateColumns={{ base: "repeat(1,1fr)", lg: "40% 60%" }}
          mb="8"
          overflow="hidden"
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
              En el ultimo tiempo estuve haciendo hincapié en mejorar mi
              criterio en lo referente al{" "}
              <Highlighter text=" Clean Code,Testing y patrones de diseño" />.
            </Text>
          </Stack>
          <Stack>
            <Carousel slidesCode={slidesCode} />
          </Stack>
        </Grid>
      </Stack>
      <DividerPhrases
        author="Robert C. Martin"
        phrase="Los clientes no deberían estar obligados a depender de interfaces que no utilicen"
      />
    </SectionLayout>
  );
};
