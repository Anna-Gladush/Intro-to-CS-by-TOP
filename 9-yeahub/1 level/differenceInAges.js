// Разница в возрасте
function differenceInAges(ages) {
  let min = ages[0];
  let max = ages[0];

  ages.forEach((age) => {
    if (age < min) {
      min = age;
    }
    if (age > max) {
      max = age;
    }
  });
  return [min, max, max - min];
}

console.log(differenceInAges([82, 15, 6, 38, 35])); // -> [6, 82, 76]
console.log(differenceInAges([57, 99, 14, 32])); // -> [14, 99, 85]
console.log(differenceInAges([25])); // -> [25, 25, 0]
console.log(differenceInAges([10, 10, 10])); // -> [10, 10, 0]
