class Solution(object):
    def findClosestNumber(self, nums):
        closest = nums[0]
        for n in nums:
            if abs(n) < abs(closest):
                closest = n
            elif abs(n) == abs(closest):
                closest = max(n, closest)
        
        return closest

        # Time: O(n)
        # Space: O(1)
