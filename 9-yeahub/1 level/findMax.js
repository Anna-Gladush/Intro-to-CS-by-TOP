// Максимальное число в массиве
function findMax(arr) {
  let max = arr[0];
  arr.forEach((number, idx) => {
    if (max < number) {
      max = arr[idx];
    }
  });
  return max;
}
console.log(findMax([1, 2, 5]));
