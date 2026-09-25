// Фильтрация числовых значений из массива объектов

function filterNumericValues(items) {
  const new_items = items.filter((item) => typeof item.value === "number");
  return new_items.map((item) => item.value);
}

console.log(
  filterNumericValues([
    { value: 1 },
    { value: "2" },
    { value: 3.5 },
    { value: "abc" },
  ]),
);
