let res = []
const fibonacci = (n, prev = 0, next = 1) => {
  if (n < 1) { 
    return res
  } else {
    res.push(prev)
    fibonacci(n - 1, next, prev + next)
  }
  return res
}


// not recursive
// let fibonacci_not = (n) => {
//   let results = [];
//   let prev = 0;
//   let next = 1;
//   let fib;
//   for (let i = 0; i < n; i++) {
//     if (i == 0 || i == 1) {
//       results.push(i);
//     } else {
//       fib = prev + next
//       prev = next;
//       next = fib
//       results.push(fib)
//     }
//   }
//   return results.slice(0, n)
// }
export default fibonacci