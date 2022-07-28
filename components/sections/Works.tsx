import { Stack } from "@chakra-ui/react";

import { Projects, HeadTitle } from "../ui/";

export const Works = () => {
  return (
    <Stack my="8">
      <HeadTitle number=" 03" title="Algunos proyectos" />
      <Projects />
    </Stack>
  );
};
