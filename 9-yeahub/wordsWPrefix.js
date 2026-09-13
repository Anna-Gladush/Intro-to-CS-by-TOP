function wordsWithPrefix(s, prefix) {
  s = s.split(" ");
  return s.filter((word) => word.startsWith(prefix));
}

console.log(wordsWithPrefix("ab abc def abc xyz ace ab cab", "ab"));
