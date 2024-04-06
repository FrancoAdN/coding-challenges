## Approach

1. Initialize a `max` variable that will hold the current max value.
2. Loop throught each digit of the given number, if the current digit is equal to the given character digit, create a substring containing the value from the number excluding the current position.
3. Compare the substring with the value held in `max`, if is bigger, reassign `max` to the substring.
4. Return the `max` value.

## Strategy

Algorithm

## Complexity

- `Time complexity: O(n)`
- `Space complexity: O(n)`
