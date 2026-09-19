// Функция runOnce (Run Once)
// Замыкание!!!
function runOnce(fn) {
  let flag = false;
  return function (...args) {
    if (!flag) {
      flag = true;
      return fn(...args);
    }
    return undefined;
  };
}

const logHello = () => {
  console.log("hello!");
};
const logHelloOnce = runOnce(logHello);

logHelloOnce(); // Должно вывести "hello!" в консоль
logHelloOnce();
