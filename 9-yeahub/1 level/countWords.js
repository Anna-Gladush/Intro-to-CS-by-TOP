// Подсчет количества слов в строке
function countWords(str) {
  const new_str = str
    .trim()
    .split(" ")
    .filter((elem) => elem !== "");
  return new_str.length;
}

console.log(countWords(" Hello   world  "));
