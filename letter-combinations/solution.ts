function letterCombinations(digits: string): string[] {
	const output: string[] = [];
	const map = {
		"2": "abc",
		"3": "def",
		"4": "ghi",
		"5": "jkl",
		"6": "mno",
		"7": "pqrs",
		"8": "tuv",
		"9": "wxyz",
	};

	const n = digits.length;
	const solution = [];

	function backtrack(index: number) {
		if (index === n) {
			if (solution.length) output.push(solution.join(""));
			return;
		}

		const num = digits[index];
		for (let c of map[num]) {
			solution.push(c);
			backtrack(index + 1);
			solution.pop();
		}
	}

	backtrack(0);
	return output;
}
