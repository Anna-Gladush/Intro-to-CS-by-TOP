import fibonacci from "./fibonacci";
import {describe, expect, it} from 'vitest'

describe("fibonacci", () => {
  it("takes a number and returns an array containing that many numbers from the Fibonacci sequence", () => {
    expect(fibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13])
  })
})