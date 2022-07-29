import { Stack, UnorderedList } from "@chakra-ui/react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineChrome,
} from "react-icons/ai";
import { ReactNode } from "react";

import { links } from "../../../lib/contactLinks.json";

import { ItemOfList } from "./ItemOfList";

interface Icon {
  [nameOfIcon: string]: ReactNode;
}

const icon: Icon = {
  github: <AiFillGithub aria-label="svg" size="32px" />,
  linkedin: <AiFillLinkedin aria-label="svg" size="32px" />,
  instagram: <AiFillInstagram aria-label="svg" size="32px" />,
  web: <AiOutlineChrome aria-label="svg" size="32px" />,
};

export const ListOfPlatforms = () => {
  return (
    <Stack direction="row" display={{ base: "flex", xl: "none" }}>
      <UnorderedList
        alignItems="center"
        display="flex"
        gap="8"
        justifyContent="center"
        listStyleType="none"
        w="100%"
      >
        {links.map(({ socialIcon, url }) => (
          <ItemOfList key={socialIcon} url={url}>
            {icon[socialIcon]}
          </ItemOfList>
        ))}
      </UnorderedList>
    </Stack>
  );
};
