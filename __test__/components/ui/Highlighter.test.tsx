import { render, screen } from "@testing-library/react";

import { Highlighter } from "../../../components/ui";

describe("Test Highlighter", () => {
  test("should render text prop in bold", () => {
    render(<Highlighter text="This is important" />);
    expect(screen.getByText(/this is important/i)).toHaveStyle({
      "font-weight": "bold",
    });
  });
});
