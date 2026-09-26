function getNextLang(languages, current) {
  if (languages.indexOf(current) === languages.length - 1) {
    return languages[0];
  }
  return languages[languages.indexOf(current) + 1];
}
