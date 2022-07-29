import { render, fireEvent, screen } from "@testing-library/react";

import { DotButton } from "../../../../components/ui";

describe("Test DotButton", () => {
  test("should can trigger onClick", () => {
    const onClick = jest.fn();

    render(<DotButton selected={true} onClick={onClick} />);

    fireEvent.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalled();
  });
});
