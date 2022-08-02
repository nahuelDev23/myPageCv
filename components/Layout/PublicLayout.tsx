import { Container, Stack } from "@chakra-ui/react";
import React, { FC, useContext } from "react";

import { listOfSocialDesktopAppear, MotionStack } from "../../animations";
import { TransitionContext } from "../../context";
import { IMetadata } from "../../interface";
import { ListOfSocialDesktop } from "../ui";
import { NavBar } from "../ui/";

import { HeadComponent } from "./HeadComponent";

interface Props {
  children: React.ReactNode;
  metadata?: IMetadata;
}

export const PublicLayout: FC<Props> = ({ children, metadata }) => {
  const { isAboutTransitionEnd } = useContext(TransitionContext);

  const { visible, hidden } = listOfSocialDesktopAppear;

  return (
    <Stack>
      <Container maxWidth="container.lg" position="relative">
        <HeadComponent metadata={metadata} />
        <NavBar />
        {children}
      </Container>
      {isAboutTransitionEnd && (
        <MotionStack animate={visible} initial={hidden}>
          <ListOfSocialDesktop />
        </MotionStack>
      )}
    </Stack>
  );
};
