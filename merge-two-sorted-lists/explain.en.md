## Approach

1. Create a `tail` of a new LinkedList that will hold the last node of the sorted list.
2. Create a `dummy` LinkedList that points to the head of the `tail`.
3. Itetare through both lists while either of them have nodes.
   i. If one of list does not have nodes anymore, append the other list to the `tail`.
   ii. If the value from `list1` is smaller than the value from `list2`, set the next value of the `tail` to `list1`and move the pointer of `list1` to the next node, otherwise, set the next value of the `tail` to `list2` and move its pointer.
   iii. Move the pointer from the `tail`.
4. Return the next pointer from the `dummy` list.

## Strategys

Algorithm

## Complexity

- `Time complexity: O(n)`
- `Space complexity: O(1)`
