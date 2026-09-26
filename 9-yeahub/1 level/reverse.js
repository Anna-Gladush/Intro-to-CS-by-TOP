// Обращение строки или массива

function reverse(input) {
  if (typeof input === "string") {
    return input.split("").reverse().join("");
  }
  if (Array.isArray(input)) {
    return [...input].reverse();
  }
  return input;
}

console.log(reverse([5, 4, 3, 2, 1]));
