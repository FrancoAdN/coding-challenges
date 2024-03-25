int removeDuplicates(int* nums, int numsSize) {
    for (int i = 1; i < numsSize; i++) {
        if (nums[i-1] == nums[i]) {
            for(int j = i; j < numsSize - 1; j++) nums[j] = nums[j + 1];
            numsSize--;
            i--;
        }
    }

    return numsSize;
}