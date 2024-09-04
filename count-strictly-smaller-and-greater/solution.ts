function countElements(nums: number[]): number {
	let count = 0;

	const min = Math.min(...nums);
	const max = Math.max(...nums);

	for (let n of nums) {
		if (n > min && n < max) count++;
	}

	return count;
}
