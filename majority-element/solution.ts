function majorityElement(nums: number[]): number {
  const map = new Map();
  for (let n of nums) {
    if (map[n]) {
      map[n]++;
    } else {
      map[n] = 1;
    }

    if (map[n] > Math.floor(nums.length / 2)) return n;
  }
}
