import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("app component", () => {
  it("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("if user dont click on start, the table should not exist", () => {
    render(<App />);

    const table = screen.queryByRole("table");

    expect(table).not.toBeInTheDocument();
  });

  it("when click on start, a table should exist according to size (2)", () => {
    render(<App />);

    const tableSize = 2;
    userEvent.type(
      screen.getByPlaceholderText("Introduce the size of table"),
      tableSize + ""
    );
    userEvent.click(screen.getByText("Start!"));

    const table = screen.queryByRole("table");
    const tbody = screen.queryByRole("rowgroup");
    const rows = screen.queryAllByRole("row");
    const cells = screen.queryAllByRole("cell");

    expect(table).toBeInTheDocument();
    expect(tbody).toBeInTheDocument();
    expect(rows).toHaveLength(tableSize);
    expect(cells).toHaveLength(tableSize * tableSize);
  });

  it("when click on start, a table should exist according to size (3)", () => {
    render(<App />);

    const tableSize = 3;
    userEvent.type(
      screen.getByPlaceholderText("Introduce the size of table"),
      tableSize + ""
    );
    userEvent.click(screen.getByText("Start!"));

    const table = screen.queryByRole("table");
    const tbody = screen.queryByRole("rowgroup");
    const rows = screen.queryAllByRole("row");
    const cells = screen.queryAllByRole("cell");

    expect(table).toBeInTheDocument();
    expect(tbody).toBeInTheDocument();
    expect(rows).toHaveLength(tableSize);
    expect(cells).toHaveLength(tableSize * tableSize);
  });

  it("when click on start, the table should exist according and cell value 0", async () => {
    //@TODO uncomplete test
    render(<App />);

    const tableSize = 3;
    userEvent.type(
      screen.getByPlaceholderText("Introduce the size of table"),
      tableSize + ""
    );
    userEvent.click(screen.getByText("Start!"));
    const text = await screen.findAllByText("0");
    expect(text.length).toBe(tableSize * tableSize);
  });
});
