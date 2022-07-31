import { Stack, Text } from "@chakra-ui/react";

import { secondaryDarkColor } from "../../../theme/theme_base";

import { NavBarDesktop } from "./NavBarDesktop";
import { NavBarMobile } from "./NavBarMobile";

export const NavBar = () => {
  return (
    <Stack
      bgColor={secondaryDarkColor}
      position={{ base: "inherit", sm: "sticky" }}
      py="8"
      top="0"
      zIndex="modal"
    >
      <Stack alignItems="center" flexDir="row" justifyContent="space-between">
        <Stack>
          <Text>N23</Text>
        </Stack>
        <Stack>
          <NavBarDesktop />
          <NavBarMobile />
        </Stack>
      </Stack>
    </Stack>
  );
};
