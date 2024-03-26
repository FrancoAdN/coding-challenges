## Approach

1. Initialize the Hash Map.
2. Loop through the array, if the current entry exists on the hash map,return the value from the hash map and the current index.
3. If the value does not exist on the hash map, subtract the current value to the `target`, use the result as a the key of the map and the index as its value.

## Strategy

Algorithm/Hash Map

## Complexity

- `Time complexity: O(n)`
- `Space complexity: O(1)`
