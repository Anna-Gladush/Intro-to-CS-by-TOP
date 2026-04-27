const fibonacci = (n) => {
  if (n <= 1) { 
    return [0, 1]
  } else {
    // generate fibonacci sequence up to n - 1
    const seq = fibonacci(n - 1);
    // calculate next term in the series
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]) 
  return seq.slice(0, n)

  }
}
export default fibonacci