#include <stdlib.h>
/* Definition for a binary tree node. */

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */


struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

void treeSize(struct TreeNode* root, int* size) {
    if (!root) return;
    (*size)++;
    treeSize(root->left, size);
    treeSize(root->right, size);
}


void treeTraversal(struct TreeNode* root, int* result, int* index) {
    if (!root) return;
    treeTraversal(root->left, result, index);
    result[(*index)++] = root->val;
    treeTraversal(root->right, result, index);

}


int* inorderTraversal(struct TreeNode* root, int* returnSize) {

    if (!root) {
        *returnSize = 0;
        return NULL;
    }

    int size = 0;
    treeSize(root, &size);
    int* result = (int*) malloc(size * sizeof(int));

    int index = 0;
    treeTraversal(root, result, &index);
    (*returnSize) = size;
    return result;
}