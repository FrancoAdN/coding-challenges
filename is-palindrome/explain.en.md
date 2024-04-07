## Approach

1. Parse the given number to a string.
2. Initialize two pointers, one pointing to the first element of the string and the other to the last element.
3. Loop through the string while the `left` pointer is less than the `right` pointer. On each iteration, increment the `left` pointer and decrement the `right` pointer.
4. Within the loop, check if the character at which `left` points is equal to the character at `right`. If not, return `false`.
5. If the loop completes, it means that the number is a palindrome. Then return `true`.

## Strategy

Two pointer pattern

## Complexity

- `Time complexity: O(n)`
- `Space complexity: O(1)`
