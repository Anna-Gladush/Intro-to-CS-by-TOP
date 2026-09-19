// Минимальный и максимальный возраст (Min Max Age)

function getAgeRange(people) {
  people = people.map((person) => person.age);
  let min = people[0];
  let max = people[0];
  people.forEach((age) => {
    if (age > max) {
      max = age;
    }
    if (age < min) {
      min = age;
    }
  });
  return [min, max, max - min];
}

console.log(
  getAgeRange([
    { name: "m", age: 30 },
    { name: "n", age: 20 },
    { name: "o", age: 25 },
  ]),
);
