/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

function guessNumber(n: number): number {
	let left = 1;
	let right = n;
	let mid = Math.floor((right + left) / 2);

	let picked = guess(mid);
	while (picked !== 0) {
		if (picked === 1) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}

		mid = Math.floor((right + left) / 2);
		picked = guess(mid);
	}

	return mid;
}
