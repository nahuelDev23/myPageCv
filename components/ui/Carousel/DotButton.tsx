import { Button } from "@chakra-ui/react";

interface DotButtonProps {
  selected: boolean;
  onClick: () => void;
}

export const DotButton = ({ selected, onClick }: DotButtonProps) => {
  const backgroundButton = selected ? "green.500" : "#f7f7f7";

  return (
    <Button
      _after={{
        backgroundColor: backgroundButton,
        width: "100%",
        height: "4px",
        borderRadius: " 2px",
        content: "''",
      }}
      background="transparent"
      h="30px"
      ml="7.5"
      mr="7.5"
      type="button"
      w="70px"
      onClick={onClick}
    />
  );
};
