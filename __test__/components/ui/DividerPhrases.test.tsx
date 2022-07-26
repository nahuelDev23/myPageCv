import { render, screen } from "@testing-library/react";

import { DividerPhrases } from "../../../components/ui";

describe("Test DividerPhrases", () => {
  test("should render phrase and author", () => {
    const author = "Michael Feathers";
    const phrase =
      "El buen código parece estar escrito por alguien a quien le importa.";

    render(<DividerPhrases author={author} phrase={phrase} />);

    expect(screen.getByLabelText("dividerPhrases").textContent).toContain(
      author,
    );
    expect(screen.getByLabelText("dividerPhrases").textContent).toContain(
      phrase,
    );
  });
});
