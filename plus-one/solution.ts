function plusOne(digits: number[]): number[] {
  if (digits[digits.length - 1] === 9) {
    if (digits.length === 1) {
      return [1, 0];
    }
    return [...plusOne(digits.slice(0, -1)), 0];
  }

  digits[digits.length - 1]++;
  return digits;
}
