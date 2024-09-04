function islandPerimeter(grid: number[][]): number {
	let sum = 4;
	let perimeter = 0;
	const m = grid.length;
	const n = grid[0].length;

	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === 1) {
				// check neighbours
				for (let d of directions) {
					const x = i + d[0];
					const y = j + d[1];

					if (x >= 0 && y >= 0 && x < m && y < n && grid[x][y] === 1) {
						sum--;
					}
				}

				perimeter += sum;
				sum = 4;
			}
		}
	}

	return perimeter;
}
