// Прямая реализация рекурсии - O(2^n); Использование мемоизации -  O(n) по времени и O(n) по памяти. Следовательно решение должно быть итеративным!

function fibonacci(n) {
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a;
}

console.log(fibonacci(10));
