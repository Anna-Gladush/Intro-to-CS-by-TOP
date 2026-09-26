function createIdGenerator() {
  let id = 0;

  return function () {
    return id++;
  };
}

const id = createIdGenerator();

console.log(id());
console.log(id());
console.log(id());
console.log(id());
