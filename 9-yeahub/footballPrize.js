// Футбольный приз
function getPrize(guessScore, realScore) {
  if (guessScore === realScore) {
    return 2;
  }
  const guessRes =
    guessScore[0] > guessScore[2]
      ? "win"
      : guessScore[0] < guessScore[2]
        ? "lose"
        : "draw";
  const realRes =
    realScore[0] > realScore[2]
      ? "win"
      : realScore[0] < realScore[2]
        ? "lose"
        : "draw";
  if (realRes === guessRes) return 1;
  return 0;
}

console.log(getPrize("1:2", "1:2")); // -> 2 (точный счёт)
console.log(getPrize("2:1", "5:0")); // -> 1 (исход: победа А)
console.log(getPrize("3:0", "2:2")); // -> 0 (не угадал)
