import { add } from "../src/utils";

jest.mock("../src/config", () => ({
  debug: true,
}));

it("adds 32 numbers", () => {
  expect(add(1, 2)).toBe(3);
});
