import { Stack, Text } from "@chakra-ui/react";

import { NavBarDesktop } from "./NavBarDesktop";
import { NavBarMobile } from "./NavBarMobile";

export const NavBar = () => {
  return (
    <Stack my="8">
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
