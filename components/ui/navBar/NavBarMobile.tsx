import {
  UnorderedList,
  Stack,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Button,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

import { NavBarItemParent } from "./NavBarItemParent";

export const NavBarMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack display={{ base: "flex", sm: "none" }}>
      <Button display="flex" onMouseDown={() => onOpen()}>
        <FiMenu />
      </Button>
      <Drawer isOpen={isOpen} size="xs" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent pt="8">
          <DrawerCloseButton />
          <DrawerBody>
            <UnorderedList
              display="flex"
              flexDirection="column"
              gap="8"
              listStyleType="none"
            >
              <NavBarItemParent />
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
};
