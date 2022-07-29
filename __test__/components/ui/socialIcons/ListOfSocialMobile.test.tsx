import { render, screen } from "@testing-library/react";

import { links } from "../../../../lib/contactLinks.json";
import { ListOfSocialMobile } from "../../../../components/ui";

describe("Test ListOfPlatforms", () => {
  test("should render all links", () => {
    render(<ListOfSocialMobile />);

    expect(screen.getAllByRole("link").length).toBe(links.length);
    expect(screen.getAllByLabelText("svg").length).toBe(links.length);
  });
});
