function wordsWithPrefix(s, prefix) {
  const letters = s.split(" ");
  return letters.filter((word) => word.startsWith(prefix));
}

console.log(wordsWithPrefix("ab abc def abc xyz ace ab cab", "ab"));
