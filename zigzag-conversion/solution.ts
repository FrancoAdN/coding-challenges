/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  const lines = new Array(numRows).fill("");

  let count = 1;
  let increment = 1;
  for (let l of s) {
    lines[count - 1] += l;
    count += increment;

    if (count == numRows || count - 1 == 0) {
      increment = -increment;
    }
  }
  return lines.join("");
}
