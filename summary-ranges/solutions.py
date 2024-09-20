class Solution(object):
    def summaryRanges(self, nums):
        output = []
        N = len(nums)
        i = 0
        start = 0
        end = 0

        while i < N:
            if i < N - 1 and (nums[i] + 1) == nums[i + 1]:
                end += 1
            else:
                if start == end:
                    output.append("{n}".format(n = nums[start]))
                else:
                    output.append("{s}->{e}".format(s=nums[start], e=nums[end]))
                # set range
                start = i + 1
                end = i + 1
            i += 1

        
        return output

        # Time: O(n)
        # Space: O(n)



        