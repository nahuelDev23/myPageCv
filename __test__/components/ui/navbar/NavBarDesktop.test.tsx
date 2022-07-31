import { render, screen } from "@testing-library/react";

import * as navBar from "../../../../lib/navBar.json";
import { NavBarDesktop } from "../../../../components/ui/";

describe("Test NavBarDesktop", () => {
  test("should render list of navbar", () => {
    const { nav } = navBar;

    render(<NavBarDesktop />);

    expect(screen.getAllByRole("listitem").length).toBe(nav.length);
  });
});
