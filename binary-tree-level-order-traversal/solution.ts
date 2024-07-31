/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
	if (!root) return [];
	const queue = [root];
	const levels = [];

	while (queue.length) {
		const levelSize = queue.length;
		const currentLevel = [];
		for (let i = 0; i < levelSize; i++) {
			let current = queue.shift();
			currentLevel.push(current.val);

			if (current.left) queue.push(current.left);
			if (current.right) queue.push(current.right);
		}

		levels.push(currentLevel);
	}

	return levels;
}
