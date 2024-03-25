## Approach

1. Create the `slow` and `fast` pointers that points to the head of the LinkedList.
2. Move `n` times the `fast` pointer forward.
3. If at this point the `fast` pointer is null, it means that we want to delete the head of the LinkedList.
4. Move one step forward each pointer while the next node from `fast` is defined.
5. Remove the next node from the `slow` pointer.
6. Return the `head` of the LinkedList.

## Strategy

Fast and Slow pointer in a LinkedList

## Complexity

- `Time complexity: O(n)`
- `Space complexity: O(1)`
