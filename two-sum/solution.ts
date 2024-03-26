function twoSum(nums: number[], target: number): number[] {
  let map = {};
  for (let [index, num] of nums.entries()) {
    if (map[num] !== undefined) return [map[num], index];
    map[target - num] = index;
  }
  return [];
}
