// Поиск дубликатов в массиве

function existsDuplicate(numbers) {
  if ([...new Set(numbers)].length !== numbers.length) return true;
  return false;
}
