console.log("Types!\n --------\n");

// null, undefined, boolean, number, string, object, symbol
// All primitive except object

// typeof оператор
// number boolean string object undefined object object object symbol function number
// Неточности typeof => null - не object, а тип null; function - не тип данных, а объект; NaN - number => undefined * 1; Infinity (1 / 0)
console.log(
  typeof 0,
  typeof true,
  typeof "JS",
  typeof { hello: "HI!" },
  typeof undefined,
  typeof null,
  typeof [1, 2, 3],
  typeof Math,
  typeof Symbol("JS"),
  typeof function () {},
  typeof NaN,
);

// Отличие undefined от null
// undefined => переменная не объявлена или объявлена с помощью var но нет значения + ф-ии которые ничего не возвращают, возвращают undefined
// null => переменная объявлена но значения нет

// Приведение типов
