function evalRPN(tokens: string[]): number {
	const stack: number[] = [];

	const operations = {
		"+": (b, a) => b + a,
		"-": (b, a) => b - a,
		"*": (b, a) => b * a,
		"/": (b, a) => Math.trunc(b / a),
	};
	for (let tkn of tokens) {
		if (Object.keys(operations).includes(tkn)) {
			const operan1 = stack.pop();
			const operan2 = stack.pop();
			const result = operations[tkn](operan2, operan1);
			stack.push(result);
		} else {
			stack.push(parseInt(tkn));
		}
	}

	return stack.pop();
}
