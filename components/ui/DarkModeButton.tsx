import { Button, useColorMode } from "@chakra-ui/react";

export const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button onClick={() => toggleColorMode()}>Change to {colorMode}</Button>
    </>
  );
};
