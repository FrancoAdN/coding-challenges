## Approach

- Travese both subtrees and return an object with two properties, the value of the node and whether it is a left node or not.
  With both subtree arrays, check if the value from the last node visisted on one side matches the value from the first one visited on the other and if they belong to different sides of the tree until there are no more nodes to check.
- Use the helper function `isMirror`, incharge of checking the if the value of two nodes are equals, if the left subtree from the first node mirrors the right subtree of the second node, and if the right subtree from the first node mirrors the left subtree from second node.

## Strategys

Recursion

## Complexity

- `Time complexity: O(n)`
- `Space complexity: O(1)`
