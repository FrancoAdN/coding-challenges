function spiralOrder(matrix: number[][]): number[] {
	const m = matrix.length;
	const n = matrix[0].length;
	let ud = n;
	let rl = m - 1;
	const result: number[] = [];
	let row = 0;
	let col = -1;
	let offsetX = 1;
	let offsetY = 1;
	let steps = 0;
	let updown = true;

	while (result.length < m * n) {
		steps++;

		if (updown) {
			col += offsetX;
			if (ud === Math.abs(steps)) {
				ud -= 1;
				steps = 0;
				updown = false;
				offsetX = -offsetX;
			}
		} else {
			row += offsetY;
			if (rl === Math.abs(steps)) {
				rl -= 1;
				steps = 0;
				updown = true;
				offsetY = -offsetY;
			}
		}

		result.push(matrix[row][col]);
	}

	return result;
}
