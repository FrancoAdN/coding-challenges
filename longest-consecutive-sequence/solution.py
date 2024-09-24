class Solution(object):
    def longestConsecutive(self, nums):

        sett = set(nums)
        sequence = []
        longest = 0
        for x in nums:
            if x - 1 not in sett:
                next_num = x + 1
                length = 1
                while next_num in sett:
                    next_num += 1
                    length += 1
                longest = max(longest, length)
        

        return longest
        # Time: O(n)
        # Space: O(n)

        