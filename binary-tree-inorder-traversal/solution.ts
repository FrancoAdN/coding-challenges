/* Definition for a binary tree node. */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  return [
    ...inorderTraversal(root.left),
    root.val,
    ...inorderTraversal(root.right),
  ];
}

function other_inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const left = inorderTraversal(root.left);
  const right = inorderTraversal(root.right);

  let result = left;
  result.push(root.val);
  result = result.concat(right);

  return result;
}

function iterative_inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  if (!root.left && !root.right) return [root?.val];

  const res = [];

  // Initialize an empty stack for iterative traversal
  const stack: TreeNode[] = [];

  // Loop until either the current node is not null or the stack is not empty
  while (root || stack.length > 0) {
    // Traverse to the leftmost node and push each encountered node onto the stack
    while (root) {
      stack.push(root);
      root = root.left;
    }

    // Pop the last node from the stack (most recently left-visited node)
    root = stack.pop();

    // Append the value of the popped node to the result array
    res.push(root.val);

    // Move to the right subtree to continue the in-order traversal
    root = root.right;
  }

  // Return the final result array
  return res;
}
