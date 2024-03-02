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
