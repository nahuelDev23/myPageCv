import { render, screen } from "@testing-library/react";

import { Carousel, slidesCode } from "../../../../components/ui";

describe("Test Carousel", () => {
  test("should render all code example", () => {
    render(<Carousel slidesCode={slidesCode} />);

    expect(screen.getAllByLabelText("slidesCode").length).toBe(
      slidesCode.length,
    );
  });

  test("should render all buttons Paginate", () => {
    render(<Carousel slidesCode={slidesCode} />);

    expect(screen.getAllByRole("button").length).toBe(slidesCode.length);
  });
});
