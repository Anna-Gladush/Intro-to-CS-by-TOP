// Подсчет количества слов в строке
function countWords(str) {
  str = str
    .trim()
    .split(" ")
    .filter((elem) => elem !== "");
  return str.length;
}

console.log(countWords(" Hello   world  "));
