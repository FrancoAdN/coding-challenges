function parseInput(input) {
	const lines = input.trim().split("\n");
	let index = 0;
	const q = parseInt(lines[index++], 10);
	const queries = [];

	for (let i = 0; i < q; i++) {
		const [n, m] = lines[index++].split(" ").map(Number);
		const edges = [];

		for (let j = 0; j < m; j++) {
			const [u, v] = lines[index++].split(" ").map(Number);
			edges.push({ u, v });
		}

		const s = parseInt(lines[index++], 10);
		queries.push({ n, m, edges, s });
	}

	return { q, queries };
}

function getNextIndex(distances, final) {
	let idx = -1;
	let min = Infinity;

	for (let i = 0; i < distances.length; i++) {
		if (!final[i] && distances[i] < min) {
			min = distances[i];
			idx = i;
		}
	}

	return idx;
}

function dijkstra(graph, nodes, start) {
	const distances = Array(nodes + 1).fill(Infinity);
	const final = Array(nodes + 1).fill(false);

	let current = start;
	distances[current] = 0;

	do {
		final[current] = true;
		for (let edge of graph) {
			if (edge.u === current || edge.v === current) {
				const sum = distances[current] + 6;
				if (edge.u === current) {
					if (
						!final[edge.v] &&
						(distances[edge.v] === Infinity || distances[edge.v] > sum)
					) {
						distances[edge.v] = sum;
					}
				} else {
					if (
						!final[edge.u] &&
						(distances[edge.u] === Infinity || distances[edge.u] > sum)
					) {
						distances[edge.u] = sum;
					}
				}
			}
		}
		current = getNextIndex(distances, final);
	} while (current !== -1);

	distances.splice(start, 1);
	distances.shift();

	return distances.map((d) => (d === Infinity ? -1 : d)).join(" ");
}

function processData(input) {
	input = parseInput(input);

	for (let q of input.queries) {
		const { edges, n, s } = q;
		console.log(dijkstra(edges, n, s));
	}
}
