function prisonAfterNDays(cells: number[], n: number): number[] {
	n = n % 14 || 14;

	for (let i = 0; i < n; i++) {
		let nextDay = new Array(8).fill(0);

		for (let j = 1; j < 7; j++) {
			if (cells[j - 1] === cells[j + 1]) {
				nextDay[j] = 1;
			} else {
				nextDay[j] = 0;
			}
		}
		cells = nextDay;
	}

	return cells;
}
