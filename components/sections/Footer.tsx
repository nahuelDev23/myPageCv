import { Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";

import { TransitionContext } from "../../context";
import { ListOfSocialMobile } from "../ui";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isAboutTransitionEnd } = useContext(TransitionContext);

  return (
    <>
      {isAboutTransitionEnd && (
        <Stack alignItems="center" justifyContent="center" my="8">
          <ListOfSocialMobile />
          <Text fontSize={24}>
            Todos los derechos reservados (? - {currentYear}
          </Text>
        </Stack>
      )}
    </>
  );
};
