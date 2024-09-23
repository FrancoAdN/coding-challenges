class Solution(object):
    def twoSum(self, nums, target):
        map = {}

        for i in range(len(nums)):
            n = nums[i]
            if n in map:
                return [map[n], i]
            
            map[target - n] = i
            
            
        