import { render, screen } from "@testing-library/react";

import { links } from "../../../../lib/contactLinks.json";
import { ListOfSocialDesktop } from "../../../../components/ui";

describe("Test ListOfPlatforms", () => {
  test("should render all links", () => {
    render(<ListOfSocialDesktop />);

    expect(screen.getAllByRole("link").length).toBe(links.length);
    expect(screen.getAllByLabelText("svg").length).toBe(links.length);
  });
});
