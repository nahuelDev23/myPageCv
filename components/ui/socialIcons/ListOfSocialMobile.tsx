import { Stack, UnorderedList } from "@chakra-ui/react";

import * as contactLinks from "../../../lib/contactLinks.json";

import { ItemOfListContainer } from "./ItemOfListContainer";

export const ListOfSocialMobile = () => {
  const { links } = contactLinks;

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
          <ItemOfListContainer
            key={socialIcon}
            socialIcon={socialIcon}
            url={url}
          />
        ))}
      </UnorderedList>
    </Stack>
  );
};
