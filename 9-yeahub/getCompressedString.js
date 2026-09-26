function getCompressedString(str) {
  const arr = str.toLowerCase().split("");
  const result = [];
  let count = 1;
  arr.forEach((elem, index) => {
    if (arr[index + 1] === elem) {
      count++;
    } else {
      result.push(elem, count);
      count = 1;
    }
  });
  return result.join("");
}

console.log(getCompressedString("abc"));
console.log(getCompressedString("aaAaBbBbDFFFff"));
