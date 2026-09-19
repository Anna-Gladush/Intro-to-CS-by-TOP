// Переводы с логированием (Translation with Logging)
const translations = {
  en: {
    hello: "Hello",
    welcome: "Welcome",
  },
  ru: {
    hello: "Privet",
    welcome: "Dobro pozhalovat",
  },
};

function getTranslationSafe(lang, key) {
  if (translations[lang] && translations[lang][key]) {
    return translations[lang][key];
  }
  return "[MISSING]";
}

console.log(getTranslationSafe("en", "hello"));
console.log(getTranslationSafe("ru", "welcome"));
