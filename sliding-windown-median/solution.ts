function binaryInsertion(arr, target) {
	let left = 0;
	let right = arr.length;
	while (left < right) {
		const mid = (left + right) >> 1;

		if (target > arr[mid]) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}
	arr.splice(left, 0, target);
}

function binaryDeletion(arr, target) {
	let left = 0;
	let right = arr.length;
	while (left < right) {
		const mid = (left + right) >> 1;

		if (target === arr[mid]) {
			arr.splice(mid, 1);
			break;
		} else if (target > arr[mid]) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}
}

function medianSlidingWindow(nums: number[], k: number): number[] {
	const output = [];
	const window = [];
	const mid = Math.floor(k / 2);
	const isEven = k % 2 === 0;

	for (let i = 0; i < nums.length; i++) {
		binaryInsertion(window, nums[i]);

		if (window.length > k) {
			binaryDeletion(window, nums[i - k]);
		}

		if (window.length === k) {
			output.push(isEven ? (window[mid - 1] + window[mid]) / 2 : window[mid]);
		}
	}

	return output;
}
