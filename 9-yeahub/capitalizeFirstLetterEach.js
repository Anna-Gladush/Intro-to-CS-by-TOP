// Заглавные буквы слов в строке

function capitalizeWords(s) {
  if (s === "") return "";
  const words = s.split(" ");
  return words
    .map((word) => {
      const letters = word.split("");
      letters[0] = letters[0].toUpperCase();
      word = letters.join("");
      return word;
    })
    .join(" ");
}

console.log(capitalizeWords("hello world"));
