import { Stack } from "@chakra-ui/react";
import { useContext } from "react";

import { ScrollToContext } from "../../context";
import { Projects, HeadTitle } from "../ui/";

export const Works = () => {
  const { scrollToWorks } = useContext(ScrollToContext);

  return (
    <Stack ref={scrollToWorks} my="8">
      <HeadTitle number=" 03" title="Algunos proyectos" />
      <Projects />
    </Stack>
  );
};
