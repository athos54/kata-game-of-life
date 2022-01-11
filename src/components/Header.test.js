import { render, screen } from "@testing-library/react";

describe("header component", () => {
  it("input should contain placeholder eq to Introduce the size of table", () => {
    render(<Header />);

    expect(
      screen.getByPlaceholderText("Introduce the size of table")
    ).toBeInTheDocument();
  });
});
