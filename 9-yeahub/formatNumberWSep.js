function formatWithApostrophe(price) {
  let new_price = price.toString().split("").reverse();
  for (let i = 0; i < new_price.length; i++) {
    if (i % 4 === 0) {
      new_price.splice(i, 0, "'");
    }
  }
  new_price = new_price.reverse();
  new_price.pop();
  return new_price.join("");
}

console.log(formatWithApostrophe(12345678));
