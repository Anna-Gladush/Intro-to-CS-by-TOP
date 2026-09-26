function createCharReader(str) {
  let index = 0;

  return function () {
    if (index < str.length) {
      return str[index++];
    }
    return null;
  };
}

const reader = createCharReader("hi");
console.log(reader());
console.log(reader());
console.log(reader());
