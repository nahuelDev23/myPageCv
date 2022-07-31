import {
  UnorderedList,
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from "@chakra-ui/react";

import { NavBarItemParent } from "./NavBarItemParent";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const NavBarMobileDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer isOpen={isOpen} placement="bottom" size="xs" onClose={onClose}>
      <DrawerContent py="8">
        <DrawerCloseButton aria-label="closeDrawer" />
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
  );
};
