// Переворот строки на месте

function reverseString(s) {
  if (1 >= s.length || s.length >= 1000000) return;
  return s.reverse();
}

console.log(reverseString(["h", "e", "l", "l", "o"]));
