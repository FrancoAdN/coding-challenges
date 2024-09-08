function isValidSudoku(board: string[][]): boolean {
	const rows = Array.from({ length: 9 }, () => new Set());
	const cols = Array.from({ length: 9 }, () => new Set());
	const boxes = Array.from({ length: 9 }, () => new Set());

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			const num = board[i][j];

			if (num === ".") continue;

			if (rows[i].has(num)) return false;
			rows[i].add(num);

			if (cols[j].has(num)) return false;
			cols[j].add(num);

			const idx = Math.floor(i / 3) * 3 + Math.floor(j / 3);
			if (boxes[idx].has(num)) return false;
			boxes[idx].add(num);
		}
	}

	return true;
}
