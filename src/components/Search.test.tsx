import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "../test-utils";
import Search from "./Search";

test("Search with input", () => {
  const history = createMemoryHistory();

  render(
    <Router history={history}>
      <Search />
    </Router>
  );

  const input = screen.getByPlaceholderText(/is:open/i);
  const form = screen.getByTestId("form");

  fireEvent.change(input, {
    target: {
      value: "is:closed",
    },
  });

  fireEvent.submit(form);

  expect(history.location.search).toBe("?page=1&q=is%3Aclosed");
});

test("Search without input", () => {
  const history = createMemoryHistory();

  render(
    <Router history={history}>
      <Search />
    </Router>
  );

  const input = screen.getByPlaceholderText(/is:open/i);
  const form = screen.getByTestId("form");

  fireEvent.change(input, {
    target: {
      value: "",
    },
  });

  fireEvent.submit(form);

  expect(history.location.search).toBe("?page=1&q=");
});
