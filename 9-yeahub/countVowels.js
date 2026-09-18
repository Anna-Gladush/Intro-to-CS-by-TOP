// Подсчет количества гласных

function countVowels(str) {
  let count = 0;
  str = str.toLowerCase().split("");
  str.forEach((letter) => {
    if (["a", "e", "i", "o", "u"].includes(letter)) count++;
  });
  return count;
}

console.log(countVowels("hello"));
