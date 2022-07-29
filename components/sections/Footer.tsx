import { Stack, Text } from "@chakra-ui/react";

import { ListOfSocialMobile } from "../ui";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Stack alignItems="center" justifyContent="center" my="8">
      <ListOfSocialMobile />
      <Text fontSize={24}>
        Todos los derechos reservados (? - {currentYear}
      </Text>
    </Stack>
  );
};
