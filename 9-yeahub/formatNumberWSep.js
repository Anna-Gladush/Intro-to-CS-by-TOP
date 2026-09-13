function formatWithApostrophe(price) {
  price = price.toString().split("").reverse();
  for (let i = 0; i < price.length; i++) {
    if (i % 4 === 0) {
      price.splice(i, 0, "'");
    }
  }
  price = price.reverse();
  price.pop();
  return price.join("");
}

console.log(formatWithApostrophe(12345678));
