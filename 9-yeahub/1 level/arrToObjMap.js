function arrayToObject(arr) {
  let result = {};
  arr.forEach((obj) => {
    result[obj.name] = obj.value;
  });
  return result;
}

console.log(
  arrayToObject([
    { name: "width", value: 10 },
    { name: "height", value: 20 },
  ]),
);
