import React from "react";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { render } from "../test-utils";
import Home from "./Home";

test("Home", async () => {
  render(
    <Router>
      <Home />
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

  await waitFor(
    () => {
      const result = screen.getByTestId("issues");

      expect(result.children.length).toEqual(25);
    },
    {
      timeout: 4000,
    }
  );
});
