import mergeSort from "./mergesort";
import {describe, expect, it} from 'vitest'

describe("mergeSort", () => {
  it("empty", () => {
    expect(mergeSort([])).toEqual([])
  })

  xit("1 number", () => {
    expect(mergeSort([73])).toEqual([73])
  })

  xit("sorted array", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })

  xit("unsorted array [1]", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([3, 2, 1, 13, 8, 5, 0, 1])
  })

  xit("unsorted array [2]", () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([105, 79, 100, 110])
  })
})