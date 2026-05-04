const merge = (left, right) => {
  const sortedArray = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift())
    } else {
      sortedArray.push(right.shift())
    }
  }
  return [...sortedArray, ...left, ...right]
}

const mergeSort = (arr) => {
  if (arr.length == 0) {
    return []
  }
  if (arr.length == 1) {
    return arr
  }
  const half = Math.round(arr.length / 2)
  const left = mergeSort(arr.slice(0, half))
  const right = mergeSort(arr.slice(half))
  return merge(left, right)
}
export default mergeSort