// test for fetchWordDefinition function

import { fetchWordDefinition } from "./fetchWordDefinition";
import { expect, test } from "@jest/globals";

test("fetch Word Definition", async () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const data = await fetchWordDefinition("test", apiKey);
  expect(data[0].hwi.hw).toContain("test");
});
