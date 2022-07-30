import { useContext } from "react";

import { ScrollToContext } from "../../context";
import { SectionLayout } from "../Layout";
import { Projects, HeadTitle } from "../ui/";

export const Works = () => {
  const { scrollToWorks } = useContext(ScrollToContext);

  return (
    <SectionLayout reference={scrollToWorks}>
      <HeadTitle number=" 03" title="Algunos proyectos" />
      <Projects />
    </SectionLayout>
  );
};
