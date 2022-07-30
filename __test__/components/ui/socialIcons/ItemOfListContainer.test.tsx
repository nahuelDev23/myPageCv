import { render, screen } from "@testing-library/react";
import { UnorderedList } from "@chakra-ui/react";

import { links } from "../../../../lib/contactLinks.json";
import { ItemOfListContainer } from "../../../../components/ui";

describe("Test ItemOfListContainer", () => {
  test("should render social icon + url ", () => {
    const socialIcon = links[0].socialIcon;
    const url = links[0].url;

    render(
      <UnorderedList>
        <ItemOfListContainer socialIcon={socialIcon} url={url} />
      </UnorderedList>,
    );
    expect((screen.getByRole("link") as HTMLLinkElement).href).toBe(`${url}/`);
    expect(screen.getByLabelText("svg")).toBeInTheDocument();
  });
});
