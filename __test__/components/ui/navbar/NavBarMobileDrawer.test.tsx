import { render, screen, fireEvent } from "@testing-library/react";

import * as navBar from "../../../../lib/navBar.json";
import { NavBarMobileDrawer } from "../../../../components/ui";

describe("Test NavBarMobileDrawer", () => {
  test("should render nav list and trigger onClose", () => {
    const { nav } = navBar;
    const isOpen = true;
    const onClose = jest.fn();

    render(<NavBarMobileDrawer isOpen={isOpen} onClose={onClose} />);

    expect(screen.getAllByRole("listitem").length).toBe(nav.length);

    fireEvent.click(screen.getByRole("button"));

    expect(onClose).toHaveBeenCalled();
  });
});
