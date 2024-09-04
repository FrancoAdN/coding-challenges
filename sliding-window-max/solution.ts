function maxSlidingWindow(nums: number[], k: number): number[] {
	const output: number[] = [];
	const queue: number[] = [];
	let left = 0;
	let right = 0;

	while (right < nums.length) {
		// Pop smaller values from queue
		while (queue.length && nums[queue[queue.length - 1]] < nums[right]) {
			queue.pop();
		}
		queue.push(right);

		// Remove left val from window
		if (left > queue[0]) {
			queue.shift();
		}

		if (right + 1 >= k) {
			output.push(nums[queue[0]]);
			left++;
		}

		right++;
	}

	return output;
}
