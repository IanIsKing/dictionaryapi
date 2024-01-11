// test for fetchWordDefinition function

import { fetchWordDefinition } from "./fetchWordDefinition";
import { expect, test } from "@jest/globals";

test("fetch Word Definition", async () => {
  const data = await fetchWordDefinition(
    "test",
    "3cc41a21-ea1b-49e0-a6c8-cd0b5a1723ca"
  );
  expect(data[0].hwi.hw).toContain("test");
});
