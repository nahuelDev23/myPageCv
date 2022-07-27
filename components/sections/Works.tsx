import { Heading, Stack, Text } from "@chakra-ui/react";

import { Projects } from "../ui/";

export const Works = () => {
  return (
    <Stack my="8">
      <Heading as="h2" mb="4">
        <Stack alignItems="baseline" direction="row">
          <Text color="green.500" fontFamily="firaCode" fontWeight="500">
            03.
          </Text>
          <Text fontFamily="paraph">Algunos proyectos </Text>
        </Stack>
      </Heading>
      <Projects />
    </Stack>
  );
};
