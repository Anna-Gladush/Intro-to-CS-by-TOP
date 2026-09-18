function findAverage(arr) {
  if (arr.length === 0) return 0;

  return arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
}

console.log(findAverage([1, 2, 3, 4]));
