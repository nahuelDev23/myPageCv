import { Stack } from "@chakra-ui/react";
import { useContext } from "react";

import { ScrollToContext } from "../../context";
import { SectionLayout } from "../Layout";
import { Projects, HeadTitle, DividerPhrases } from "../ui/";

export const Works = () => {
  const { scrollToWorks } = useContext(ScrollToContext);

  return (
    <SectionLayout reference={scrollToWorks}>
      <Stack mb="8">
        <HeadTitle number=" 03" title="Algunos proyectos" />
        <Projects />
      </Stack>
      <DividerPhrases
        author="Donald Knuth"
        phrase="Programar es el arte de decirle a otro humano lo que quieres que la computadora haga"
      />
    </SectionLayout>
  );
};
