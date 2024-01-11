// another version of testing if the Apps heading is rendered correctly

import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/My new Little Dictionary/i);
  expect(linkElement).toBeInTheDocument();
});
