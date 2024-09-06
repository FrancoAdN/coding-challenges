function kClosest(points: number[][], k: number): number[][] {
	points = points.sort((a, b) => {
		if (distanceToOrigin(a) < distanceToOrigin(b)) return -1;
		return 1;
	});

	return points.slice(0, k);
}

function distanceToOrigin(point: number[]) {
	return Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));
}
