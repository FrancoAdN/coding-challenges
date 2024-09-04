function checkValidGrid(grid: number[][]): boolean {
	const moves = [
		[1, -2],
		[-1, -2],
		[-2, -1],
		[-2, 1],
		[-1, 2],
		[1, 2],
		[2, -1],
		[2, 1],
	];

	const n = grid.length;
	let current = {
		row: 0,
		col: 0,
		value: 0,
	};
	const goal = n * n - 1;

	if (grid[0][0] !== 0) return false;

	while (current.value !== goal) {
		let changed = false;
		for (let m of moves) {
			const row = current.row + m[0];
			const col = current.col + m[1];
			const in_range = row >= 0 && col >= 0 && row < n && col < n;
			if (in_range && grid[row][col] === current.value + 1) {
				current = {
					value: grid[row][col],
					row,
					col,
				};
				changed = true;
				break;
			}
		}

		if (!changed) return false;
	}

	return true;
}
