// Сумма цифр числа

function sumDigits(n) {
  if (n < 0) {
    n = n * -1;
  }
  n = n
    .toString()
    .split("")
    .reduce((prev, curr) => prev + Number(curr), 0);
  return n;
}

console.log(sumDigits(123));
