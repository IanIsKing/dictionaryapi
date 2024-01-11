// tests if the Apps heading is rendered correctly

import React from "react";
import renderer from "react-test-renderer";
// import { renderer } from "@testing-library/react";

test("renders correctly", () => {
  const tree = renderer.create(<h1>My new Little Dictionary</h1>).toJSON();
  expect(tree).toMatchSnapshot();
});
