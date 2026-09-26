// Квадраты чисел (Squares Array)
function getSquares(n) {
  const arr = [];
  if (n < 0 || n > 10000)
    throw new RangeError("n should be higher than 0 and lower than 10.000");

  for (let i = 0; i < n; i++) {
    arr.push(i * i);
  }
  return arr;
}

console.log(getSquares(5));
