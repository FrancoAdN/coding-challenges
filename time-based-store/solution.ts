class TimeMap {
	map;
	constructor() {
		this.map = {};
	}

	binarySearch(arr, timestamp) {
		let left = 0;
		let right = arr.length - 1;
		let mid;

		while (left <= right) {
			mid = Math.floor((right + left) / 2);

			if (arr[mid].timestamp === timestamp) {
				return mid;
			} else if (arr[mid].timestamp < timestamp) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		}

		return right >= 0 ? right : -1;
	}

	set(key: string, value: string, timestamp: number): void {
		if (!this.map[key]) {
			this.map[key] = [];
		}

		this.map[key].push({ timestamp, value });
	}

	get(key: string, timestamp: number): string {
		if (!this.map[key]) return "";

		const idx = this.binarySearch(this.map[key], timestamp);
		return this.map[key][idx]?.value || "";
	}
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
