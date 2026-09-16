// Обратный словарь

function reverseKeyValue(dict) {
  let result = {};
  for (let key in dict) {
    if (!isNaN(Number(key))) {
      key = Number(key);
    }
    result[dict[key]] = key;
  }
  return result;
}

console.log(reverseKeyValue({ 1: 2, 3: 2, s: "b" }));
