import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Header } from "./Header.js";

describe("header component", () => {
  it("input should contain placeholder eq to Introduce the size of table", () => {
    render(<Header />);

    expect(
      screen.getByPlaceholderText("Introduce the size of table")
    ).toBeInTheDocument();
  });

  it("when click on start element header should disappear", () => {
    render(<Header />);

    userEvent.click(screen.getByText('Start!'))
    expect(screen.getByText('Start!')).not.toBeInTheDocument()
  })
});
