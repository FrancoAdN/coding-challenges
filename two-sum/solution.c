// O(n^2) solution
int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    int* result = (int*) malloc(2 * sizeof(int));
    *returnSize = 2;
    
    for (int i = 0; i < numsSize - 1; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            int sum = nums[i] + nums[j];
            if (sum == target) {
                result[0] = i;
                result[1] = j;
                return result;
            }
        }
    }
    *returnSize = 0;
    return result;
}