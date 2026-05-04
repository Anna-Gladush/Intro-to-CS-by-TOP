import mergeSort from "./mergesort";
import {describe, expect, test} from 'vitest'

describe("mergeSort", () => {
  test("empty", () => {
    expect(mergeSort([])).toEqual([])
  })

  test("1 number", () => {
    expect(mergeSort([73])).toEqual([73])
  })

  test("sorted array", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })

  test("unsorted array [1]", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13])
  })

  test("unsorted array [2]", () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110])
  })
})