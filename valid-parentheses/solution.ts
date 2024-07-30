function isValid(s: string): boolean {
	const brackets = {
		"[": "]",
		"{": "}",
		"(": ")",
	};
	const stack: string[] = [];
	for (let b of s.split("")) {
		if (Object.keys(brackets).includes(b)) {
			stack.push(brackets[b]);
		} else {
			const closing = stack.pop();
			if (closing !== b) return false;
		}
	}

	return stack.length === 0;
}
