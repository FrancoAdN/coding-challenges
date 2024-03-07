/**
 * Definition for a binary tree node.
 */
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

function traverseTree(
  root: TreeNode | null,
  isLeft: boolean
): { val: number; isLeft: boolean }[] {
  if (!root) return [];
  return [
    ...traverseTree(root.left, true),
    { val: root.val, isLeft: isLeft },
    ...traverseTree(root.right, false),
  ];
}

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;
  if (!root.left && !root.right) return true;
  if (!root.left || !root.right) return false;

  const leftTree = traverseTree(root.left, true);
  const rightTree = traverseTree(root.right, false);

  if (leftTree.length !== rightTree.length) return false;

  while (leftTree.length) {
    const leftNode = leftTree.pop();
    const rightNode = rightTree.shift();
    if (
      leftNode.val !== rightNode.val ||
      leftNode.isLeft !== !rightNode.isLeft
    ) {
      return false;
    }
  }

  return true;
}

const better_isSymmetric = (root: TreeNode | null): boolean => {
  return isMirror(root, root);
};

const isMirror = (t1: TreeNode | null, t2: TreeNode | null): boolean => {
  if (t1 === null && t2 === null) return true;
  if (t1 === null || t2 === null) return false;

  return (
    t1.val === t2.val &&
    isMirror(t1.left, t2.right) &&
    isMirror(t1.right, t2.left)
  );
};
