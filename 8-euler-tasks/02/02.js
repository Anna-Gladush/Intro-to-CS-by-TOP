// Задача №2

// Каждый следующий элемент ряда Фибоначчи получается при сложении двух предыдущих. Начиная с 1 и 2, первые 10 элементов будут:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// Найдите сумму всех четных элементов ряда Фибоначчи, которые не превышают четыре миллиона.

// O(n) - fibonacci

export function fibonacci(n, prev_step = 1, next_step = 2, fib_arr = []) {
  if (n < 1) {
    return fib_arr;
  } else {
    fib_arr.push(prev_step);
    fibonacci(n - 1, next_step, next_step + prev_step, fib_arr);
  }
  return fib_arr;
}

export function fibonacci_sum(arr, target) {}
