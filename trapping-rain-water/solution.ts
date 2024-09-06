function trap(height: number[]): number {
	let l_wall = 0;
	let r_wall = 0;
	const n = height.length;
	const left = Array(n).fill(0);
	const right = Array(n).fill(0);

	for (let i = 0; i < n; i++) {
		let j = n - 1 - i;
		left[i] = l_wall;
		right[j] = r_wall;
		l_wall = Math.max(l_wall, height[i]);
		r_wall = Math.max(r_wall, height[j]);
	}

	let sum = 0;

	for (let i = 0; i < n; i++) {
		let potential = Math.min(left[i], right[i]);
		sum += Math.max(0, potential - height[i]);
	}

	return sum;
}
