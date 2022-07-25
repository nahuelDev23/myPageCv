import { fireEvent, render, screen } from "@testing-library/react";
import { useColorMode } from "@chakra-ui/react";

import { DarkModeButton } from "../../../components/ui/DarkModeButton";

describe("Test DarkModeButton", () => {
  test("should change localStorage color mode", () => {
    const mockToggleColorMode = jest.fn();

    (useColorMode as jest.Mock).mockReturnValue({
      toggleColorMode: mockToggleColorMode,
    });

    render(<DarkModeButton />);
    screen.debug();
    fireEvent.click(screen.getByText(/Change Mode Color/i));
  });
});
