import { Button, useColorMode } from "@chakra-ui/react";

export const DarkModeButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Button onClick={() => toggleColorMode()}>Change Mode Color</Button>
    </>
  );
};
