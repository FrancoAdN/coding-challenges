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

function get_height(root) {
	if (!root) return 0;

	let left = get_height(root.left);
	let right = get_height(root.right);

	if (left > right) left++;
	else right++;

	return Math.max(left, right);
}

function nodes_at_level(
	root: TreeNode,
	level: number,
	sum: { result: number }
) {
	if (level === 1 && root) {
		sum.result += root.val;
		return;
	}

	if (root.left) nodes_at_level(root.left, level - 1, sum);
	if (root.right) nodes_at_level(root.right, level - 1, sum);
}

function deepestLeavesSum(root: TreeNode | null): number {
	if (!root) return 0;

	const height = get_height(root);
	let sum = {
		result: 0,
	};
	nodes_at_level(root, height, sum);

	return sum.result;
}
