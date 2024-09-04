function asteroidsDestroyed(mass: number, asteroids: number[]): boolean {
	asteroids = asteroids.sort((a, b) => b - a);

	while (asteroids.length && asteroids[asteroids.length - 1] <= mass) {
		mass += asteroids.pop();
	}

	return asteroids.length === 0;
}
