// Удаление нулей из массива
function removeZeroes(nums) {
  if (nums.length < 0 || nums.length > 10000) return;

  return nums.filter((i) => i !== 0);
}
