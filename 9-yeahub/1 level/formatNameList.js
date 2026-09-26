// Форматирование списка имён

function list(names) {
  switch (names.length) {
    case 0:
      return "";
    case 1:
      return `${names[0].name}`;
    case 2:
      return `${names[0].name} & ${names[1].name}`;
    default:
      const last = `${names[names.length - 2].name} & ${names[names.length - 1].name}`;
      names.splice(-2, 2);
      return names.map((person) => `${person.name}, `).join("") + last;
  }
}
console.log(list([{ name: "Bart" }])); // -> "Bart"
console.log(list([{ name: "Bart" }, { name: "Lisa" }])); // -> "Bart & Lisa"
console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])); // -> "Bart, Lisa & Maggie"
console.log(list([]));
