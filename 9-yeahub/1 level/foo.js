function foo(arr) {
  const result = {};
  arr.forEach((elem) => {
    result[elem] = 0;
  });
  return result;
}

console.log(foo(["a", "b", "c"]));
console.log(foo([1, 2, 2, 3]));
