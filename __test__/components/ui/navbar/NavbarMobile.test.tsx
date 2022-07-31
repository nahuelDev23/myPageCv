import { render, screen, fireEvent } from "@testing-library/react";

import * as navBar from "../../../../lib/navBar.json";
import { NavBarMobile } from "../../../../components/ui/";

describe("Test NavBarDesktop", () => {
  test("should render list of navbar", async () => {
    const { nav } = navBar;

    render(<NavBarMobile />);

    fireEvent.mouseDown(screen.getByRole("button"));

    expect(screen.queryAllByRole("listitem").length).toBe(nav.length);
  });
});
