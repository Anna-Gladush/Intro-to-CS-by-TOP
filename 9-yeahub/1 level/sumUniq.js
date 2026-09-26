// Сумма уникальных элементов

function sumUniq(arr) {
  let sum = 0;
  arr.forEach((number) => {
    if (arr.indexOf(number) === arr.lastIndexOf(number)) sum += number;
  });
  return sum;
}

console.log(sumUniq([1, 2, 3, 2, 2]));
console.log(sumUniq([1, 1, 2, 2, 3, 3]));
