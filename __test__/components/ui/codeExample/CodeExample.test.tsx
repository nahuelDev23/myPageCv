import { render, screen } from "@testing-library/react";

import { CodeExample } from "../../../../components/ui";

describe("Test CodeExample", () => {
  test("should render code", () => {
    const code = "console.log('hello coffee')";

    render(<CodeExample code={code} />);

    expect(screen.getByText(/console/i)).toBeInTheDocument();
    expect(screen.getByText(/log/i)).toBeInTheDocument();
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
    expect(screen.getByText(/coffee/i)).toBeInTheDocument();
  });
});
