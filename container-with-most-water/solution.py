class Solution(object):
    def maxArea(self, height):
        n = len(height)
        l = 0
        r = n - 1
        ans = 0

        while l < r:
            base = r - l
            h = min(height[l], height[r])
            ans = max(ans, base * h)

            if height[l] < height[r]:
                l += 1
            else:
                r -= 1
        
        return ans
        # Time: O(n)
        # Space: O(1)


        