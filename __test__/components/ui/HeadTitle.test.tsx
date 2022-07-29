import { render, screen } from "@testing-library/react";

import { HeadTitle } from "../../../components/ui";

describe("Test HeadTitle", () => {
  test("should render info props", () => {
    const number = "01";
    const title = "The title";

    render(<HeadTitle number={number} title={title} />);

    expect(screen.getByText(/01/i)).toBeInTheDocument();
    expect(screen.getByText(/the title/i)).toBeInTheDocument();
  });
});
