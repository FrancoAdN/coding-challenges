function floodFill(
	image: number[][],
	sr: number,
	sc: number,
	color: number
): number[][] {
	const m = image.length;
	const n = image[0].length;
	const start_color = image[sr][sc];

	if (color === start_color) return image;

	function dfs(i, j) {
		if (i < 0 || i >= m || j < 0 || j >= n || image[i][j] !== start_color)
			return;

		image[i][j] = color;

		dfs(i + 1, j);
		dfs(i - 1, j);
		dfs(i, j + 1);
		dfs(i, j - 1);
	}

	dfs(sr, sc);

	return image;
}
