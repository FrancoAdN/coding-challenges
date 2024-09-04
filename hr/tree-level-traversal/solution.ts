// https://www.hackerrank.com/challenges/tree-level-order-traversal/problem?isFullScreen=true

function levelOrder(root) {
	const queue = [root];
	const visited = [];

	let current;
	while (queue.length) {
		current = queue.shift();
		visited.push(current);
		if (current.left && !visited.includes(current.left)) {
			queue.push(current.left);
		}

		if (current.right && !visited.includes(current.right)) {
			queue.push(current.right);
		}
	}

	const out = visited.map((n) => n.data);

	console.log(out.join(" "));
}
