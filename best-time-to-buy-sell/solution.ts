function maxProfit(prices: number[]): number {
	let left = prices[0];
	let right = 0;
	let max = 0;
	for (let i = 1; i < prices.length; i++) {
		right = Math.max(right, prices[i]);

		if (left > prices[i]) {
			if (left < right) {
				max = Math.max(max, right - left);
			}

			left = prices[i];
			right = 0;
		}
	}

	if (left < right) max = Math.max(max, right - left);

	return max;
}
