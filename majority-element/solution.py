class Solution(object):
    def majorityElement(self, nums):
        counter = {}

        for n in nums:
            if not n in counter:
                counter[n] = 1
            else: counter[n] += 1

            if counter[n] > (len(nums) // 2):
                return n
        # Time: O(n)
        # Space: O(n)
        

        