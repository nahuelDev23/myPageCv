import { Container, Stack } from "@chakra-ui/react";
import React, { FC } from "react";

import { IMetadata } from "../../interface";
import { ListOfSocialDesktop } from "../ui";
import { NavBar } from "../ui/";

import { HeadComponent } from "./HeadComponent";

interface Props {
  children: React.ReactNode;
  metadata?: IMetadata;
}

export const PublicLayout: FC<Props> = ({ children, metadata }) => {
  return (
    <Stack>
      <Container maxWidth="container.lg" position="relative">
        <HeadComponent metadata={metadata} />
        <NavBar />
        {children}
      </Container>
      <ListOfSocialDesktop />
    </Stack>
  );
};
