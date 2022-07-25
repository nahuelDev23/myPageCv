import { Heading, Stack, Text } from "@chakra-ui/react";

export const AboutMe = () => {
  return (
    <Stack mt="4">
      <Heading>
        <Stack alignItems="baseline" direction="row">
          <Text color="green.500" fontFamily="firaCode" fontWeight="500">
            01.
          </Text>
          <Text fontFamily="paraph">Sobre Mi </Text>
        </Stack>
      </Heading>
    </Stack>
  );
};
