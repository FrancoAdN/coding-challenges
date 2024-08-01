class TrieNode {
	children: Record<string, TrieNode>;
	isEndOfWord: boolean;
	constructor() {
		this.children = {};
		this.isEndOfWord = false;
	}
}

class Trie {
	root: TrieNode;
	constructor() {
		this.root = new TrieNode();
	}

	insert(word: string) {
		let node = this.root;
		for (let i = 0; i < word.length; i++) {
			let char = word[i];
			if (!node.children[char]) {
				node.children[char] = new TrieNode();
			}
			node = node.children[char];
		}
		node.isEndOfWord = true;
	}

	search(word: string) {
		let node = this.root;

		for (let i = 0; i < word.length; i++) {
			let char = word[i];

			if (!node.children[char]) {
				return false;
			}
			node = node.children[char];
		}
		return node.isEndOfWord;
	}

	startsWith(prefix: string) {
		let node = this.root;
		for (let i = 0; i < prefix.length; i++) {
			let char = prefix[i];
			if (!node.children[char]) {
				return false;
			}
			node = node.children[char];
		}
		return true;
	}
}

/*
 * Complete the 'contacts' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts 2D_STRING_ARRAY queries as parameter.
 */

function contacts(queries: string[][]): number[] {
	const trie = new Trie();
	const result = [];
	for (let q of queries) {
		if (q[0] === "add") {
			trie.insert(q[1]);
		} else if (q[0] === "find") {
			const prefix = q[1];
			const node = findNodeByPrefix(trie, prefix);
			const count = findFinalsFromPrefixNode(node);
			result.push(count);
		}
	}
	return result;
}

function findNodeByPrefix(root: Trie, prefix: string): TrieNode {
	if (!root) return null;
	let current = root.root;
	for (let i = 0; i < prefix.length; i++) {
		const char = prefix[i];
		if (!current.children[char]) {
			return null;
		}
		current = current.children[char];
	}

	return current;
}

function findFinalsFromPrefixNode(node: TrieNode): number {
	if (!node) return 0;
	let sum = 0;

	if (node.isEndOfWord) {
		sum++;
	}

	for (let k in node.children) {
		sum += findFinalsFromPrefixNode(node.children[k]);
	}

	return sum;
}
