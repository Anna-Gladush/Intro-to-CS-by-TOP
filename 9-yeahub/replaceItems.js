function replaceItems(arr, item, replaceItem) {
  return arr.map((elem) => {
    return elem === item ? replaceItem : elem;
  });
}

console.log(replaceItems([1, 2, 3, 4, 2], 2, "a")); // -> [1, 'a', 3, 4, 'a']
