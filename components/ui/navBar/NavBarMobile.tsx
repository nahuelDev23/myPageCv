import { Stack, useDisclosure, Button } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

import { NavBarMobileDrawer } from "./NavBarMobileDrawer";

export const NavBarMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack display={{ base: "flex", sm: "none" }}>
      <Button display="flex" onMouseDown={() => onOpen()}>
        <FiMenu />
      </Button>
      <NavBarMobileDrawer isOpen={isOpen} onClose={onClose} />
    </Stack>
  );
};
