// Подсчет количества гласных

function countVowels(str) {
  let count = 0;
  const new_str = str.toLowerCase().split("");
  new_str.forEach((letter) => {
    if (["a", "e", "i", "o", "u"].includes(letter)) count++;
  });
  return count;
}

console.log(countVowels("hello"));
