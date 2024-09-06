function kClosest(points: number[][], k: number): number[][] {
	let distances = [];

	for (let p of points) {
		binaryInsert(distances, p);
	}

	return distances.slice(0, k).map((e) => e.point);
}

function distanceToOrigin(point: number[]) {
	return Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));
}

function binaryInsert(arr, point) {
	let distance = distanceToOrigin(point);
	let left = 0;
	let right = arr.length;
	let mid;

	while (left < right) {
		mid = Math.floor((right + left) / 2);
		if (arr[mid].distance < distance) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}

	arr.splice(left, 0, { distance, point });
}
