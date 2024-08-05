function contacts(queries) {
	let trie = {};
	const result = [];
	for (let q of queries) {
		const cmd = q[0];
		const word = q[1];

		if (cmd === "add") {
			trie = addToTrie(trie, word);
		} else if (cmd === "find") {
			result.push(find(trie, word));
		}
	}
	return result;
}

function find(trie, str) {
	str = str.split("");
	var node = trie[str[0]];

	if (!node) {
		return 0;
	}
	var count = str.length === 1 ? node._cnt : 0;
	for (var i = 1; i < str.length; i++) {
		node = node[str[i]];
		if (!node) {
			break;
		}
		if (i === str.length - 1) {
			count = node._cnt;
		}
	}
	return count;
}

function addToTrie(trie, str) {
	str = str.split("");

	if (!trie[str[0]]) {
		trie[str[0]] = { _cnt: 0 };
	}
	var node = trie[str[0]];
	node._cnt++;
	for (var i = 1; i < str.length; i++) {
		node[str[i]] = node[str[i]] || { _cnt: 0 };

		node[str[i]]._cnt++;

		node = node[str[i]];
	}

	return trie;
}
