 class Solution(object):
    def sortedSquares(self, nums):
        l, r = 0, len(nums) - 1

        ans = []
        
        while l  <= r:
            n1 = nums[l] ** 2
            n2 = nums[r] ** 2

            if n1 > n2:
                ans.append(n1)
                l += 1
            else:
                ans.append(n2)
                r -= 1
        
        l = 0
        r = len(ans) - 1

        while l <= r:
            temp = ans[l]
            ans[l] = ans[r]
            ans[r] = temp
            l += 1
            r -= 1

        return ans
        
        # Time: O(n)
        # Space: O(n)




        