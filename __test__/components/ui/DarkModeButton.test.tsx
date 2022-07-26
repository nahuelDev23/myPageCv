import { fireEvent, render, screen } from "@testing-library/react";

import { DarkModeButton } from "../../../components/ui/DarkModeButton";

const mockToggleColorMode = jest.fn();

jest.mock("@chakra-ui/react", () => ({
  ...jest.requireActual("@chakra-ui/react"),
  useColorMode() {
    return {
      toggleColorMode: mockToggleColorMode,
    };
  },
}));

describe("Test DarkModeButton", () => {
  test("should change localStorage color mode", () => {
    render(<DarkModeButton />);

    fireEvent.click(screen.getByText(/Change Mode Color/i));

    expect(mockToggleColorMode).toHaveBeenCalled();
  });
});
