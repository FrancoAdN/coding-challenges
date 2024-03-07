#include <stdlib.h>
#include <stdio.h>

/**
 * Definition for a binary tree node.
 */

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

short isMirror(struct TreeNode* t1, struct TreeNode* t2) {
    if (!t1 && !t2) return 1;
    if (!t1 || !t2) return 0;

    return (
        t1->val == t2->val && 
        isMirror(t1->left, t2->right) &&
        isMirror(t1->right, t2->left)
    );
}

short isSymmetric(struct TreeNode* root) {
    return isMirror(root, root);
}

