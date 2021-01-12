import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../test-utils";
import Issue from "./Issue";

test("Issue", () => {
  const data = {
    id: 1000,
    html_url: "https://google.com",
    title: "Title text",
    number: 5444,
    state: "open",
    created_at: "2020-12-25T10:23:43Z",
    closed_at: "",
    comments: 34,
    user: {
      login: "codingpop",
    },
  };

  render(<Issue data={data} />);

  const title = screen.getByText(/title text/i);
  const author = screen.getByText(/codingpop/i);
  const issueNumber = screen.getByText(/5444/i);

  expect(title).toHaveTextContent(data.title);
  expect(author).toHaveTextContent(data.user.login);
  expect(issueNumber).toHaveTextContent(data.number.toString());
});
