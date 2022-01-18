import { prettyDOM, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

    userEvent.click(screen.getByText("Start!"));
    expect(screen.queryByText("Start!")).not.toBeInTheDocument();
  });

  it("when click on start, input text should pass to parent props method", () => {
    const onClickMock = jest.fn();

    render(<Header onClick={onClickMock} />);

    userEvent.type(
      screen.getByPlaceholderText("Introduce the size of table"),
      "7"
    );
    userEvent.click(screen.getByText("Start!"));

    expect(onClickMock).toHaveBeenCalledWith(7);
  });
});
