class Solution(object):
    def productExceptSelf(self, nums):
        z_idx = -1
        product = 1
        for i in range(len(nums)):
            n = nums[i]
            if n == 0:
                if z_idx == -1:
                    z_idx = i
                else:
                    return [0] * len(nums)
            else:
                product *= n
        
        if z_idx != -1:
            for i in range(len(nums)):
                if i == z_idx:
                    nums[i] = product
                else:
                    nums[i] = 0
        else:
            for i in range(len(nums)):
                n = nums[i]
                nums[i] = product / n

        return nums

        # Time: O(n)
        # Space: O(1)
