const cache: { [key: number]: number } = {};

function climbStairs(n: number): number {
	if (n <= 2) return n;
	if (cache[n]) return cache[n];

	cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
	return cache[n];
}
