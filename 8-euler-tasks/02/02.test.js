import { fibonacci, fibonacci_sum } from "./02";
import { describe, expect, test } from "vitest";

describe("fibonacci", () => {
  test("10 elements", () => {
    expect(fibonacci(10)).toEqual([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
  });
  test("0 elements", () => {
    expect(fibonacci(0)).toEqual([]);
  });
  test("Negative", () => {
    expect(fibonacci(-1)).toEqual([]);
  });
});

// describe("fibonacci_sum", () => {
//   test("");
// });
