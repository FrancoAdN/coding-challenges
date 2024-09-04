function rankTeams(votes: string[]): string {
	if (votes.length === 1) {
		return votes[0];
	}

	const n = votes[0].length;
	const ranks = {};

	for (let v of votes) {
		for (let i = 0; i < n; i++) {
			if (!ranks[v[i]]) {
				ranks[v[i]] = new Array(n).fill(0);
			}
			ranks[v[i]][i]++;
		}
	}

	let result = Object.keys(ranks);

	result.sort((a, b) => {
		for (let i = 0; i < n; i++) {
			if (ranks[a][i] === ranks[b][i]) continue;
			return ranks[a][i] < ranks[b][i] ? 1 : -1;
		}

		return a < b ? -1 : 1;
	});

	return result.join("");
}
