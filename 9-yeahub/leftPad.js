// Дополнение строки пробелами слева

function leftPad(symbolCount, str) {
  if (symbolCount <= str.length) return str;

  let tab = "";
  for (let i = 0; i < symbolCount - str.length; i++) {
    tab += " ";
  }
  console.log(tab);
  return tab + str;
}

console.log(leftPad(6, "test")); // -> "  test" (2 пробела слева)
console.log(leftPad(10, "hello")); // -> "     hello" (5 пробелов)
console.log(leftPad(3, "test")); // -> "test" (длина уже больше)
console.log(leftPad(0, "abc"));
