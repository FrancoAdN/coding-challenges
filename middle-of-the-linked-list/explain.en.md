## Approach

1. Create a `fast` and `slow` pointers that points to the head of the LinkedList.
2. While the `fast` pointer and the next node from `fast` are defined, move the `slow` pointer one step forward and the `fast` pointer two steps forward.
3. Return the `slow` pointer that points to the next node from the middle.

## Strategy

Fast and Slow pointer in a LinkedList

## Complexity

- `Time complexity: O(n)`
- `Space complexity: O(1)`
