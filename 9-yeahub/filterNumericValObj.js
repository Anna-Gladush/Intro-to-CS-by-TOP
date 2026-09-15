// Фильтрация числовых значений из массива объектов

function filterNumericValues(items) {
  items = items.filter((item) => typeof item.value === "number");
  return items.map((item) => item.value);
}

console.log(
  filterNumericValues([
    { value: 1 },
    { value: "2" },
    { value: 3.5 },
    { value: "abc" },
  ]),
);
