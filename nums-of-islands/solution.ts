function numIslands(grid: string[][]): number {
	if (grid.length === 0) return 0;
	let islands = 0;
	const m = grid.length;
	const n = grid[0].length;

	function bfs(i, j) {
		const matrix = [
			[1, 0],
			[-1, 0],
			[0, 1],
			[0, -1],
		];
		const queue = new Array();
		queue.push([i, j]);
		let current;

		while (queue.length) {
			current = queue.shift();

			for (const dir of matrix) {
				let r = current[0] + dir[0];
				let c = current[1] + dir[1];
				if (
					r < 0 ||
					r >= grid.length ||
					c < 0 ||
					c >= grid[0].length ||
					grid[r][c] == "0"
				) {
					continue;
				}
				queue.push([r, c]);
				grid[r][c] = "0";
			}
		}
	}

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === "1") {
				bfs(i, j);
				islands++;
			}
		}
	}

	return islands;
}
