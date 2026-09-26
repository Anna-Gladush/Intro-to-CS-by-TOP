// Минимальный и максимальный возраст (Min Max Age)

function getAgeRange(people) {
  const new_people = people.map((person) => person.age);
  let min = new_people[0];
  let max = new_people[0];
  new_people.forEach((age) => {
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
