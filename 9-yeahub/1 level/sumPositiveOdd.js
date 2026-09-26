// Сумма положительных нечетных чисел

function sumPositiveOdd(arr) {
  let sum = 0;
  arr.forEach((number) => {
    if (number > 0 && number % 2 !== 0) {
      sum += number;
    }
  });
  return sum;
}

console.log(sumPositiveOdd([5, 0, -5, 20, 88, 17, -32]));
