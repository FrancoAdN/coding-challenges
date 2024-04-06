/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
function removeDigit(number: string, digit: string): string {
  let max = "0";
  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      let candidate = number.substring(0, i) + number.substring(i + 1);
      max = BigInt(candidate) > BigInt(max) ? candidate : max;
    }
  }

  return max;
}
