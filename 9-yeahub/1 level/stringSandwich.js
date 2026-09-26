function stringSandwich(a, b) {
  let result = "";
  if (a === "" || b === "") {
    result = a + b + b;
  }
  if (a.length === b.length || a.length > b.length) {
    result = b + a + b;
  } else if (a.length < b.length) {
    result = a + b + a;
  }
  return result;
}

console.log(stringSandwich("22", "1")); //"1221"
console.log(stringSandwich("abc", "def")); //"defabcdef"
