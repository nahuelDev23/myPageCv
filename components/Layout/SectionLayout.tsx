import { Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  reference: any;
  children: ReactNode;
}

export const SectionLayout = ({ reference, children }: Props) => {
  return (
    <Stack ref={reference} my="8" scrollMarginTop="24">
      {children}
    </Stack>
  );
};
