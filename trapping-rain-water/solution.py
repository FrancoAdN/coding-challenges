class Solution(object):
    def trap(self, height):

        n = len(height)
        max_l = [0] * n
        max_r = [0] * n
        l_wall = r_wall = 0


        for i in range(n):
            j = -1 -i
            
            max_l[i] = l_wall
            l_wall = max(l_wall, height[i])

            max_r[j] = r_wall
            r_wall = max(r_wall, height[j])
        

        summ = 0

        for i in range(n):
            pot = min(max_l[i], max_r[i])
            pot -= height[i]

            if pot > 0:
                summ += pot

        return summ
        # Time: O(n)
        # Space: O(n)
        