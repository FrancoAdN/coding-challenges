function generateMatrix(n: number): number[][] {
	const matrix = Array(n)
		.fill(null)
		.map(() => Array(n).fill(0));

	let count = 1;
	let ud = n;
	let lr = n - 1;
	let offsetX = 1;
	let offsetY = 1;
	let x = -1;
	let y = 0;
	let updown = true;
	let steps = 0;

	while (count <= n * n) {
		steps++;

		if (updown) {
			x += offsetX;
			if (ud === Math.abs(steps)) {
				updown = false;
				ud -= 1;
				offsetX = -offsetX;
				steps = 0;
			}
		} else {
			y += offsetY;
			if (lr === Math.abs(steps)) {
				updown = true;
				lr -= 1;
				offsetY = -offsetY;
				steps = 0;
			}
		}
		matrix[y][x] = count;
		count++;
	}

	return matrix;
}
