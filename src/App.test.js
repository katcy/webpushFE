import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { summation } from "./utl";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("summation", () => {
  expect(summation(4, 6)).not.toBe(4);
});
