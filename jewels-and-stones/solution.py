class Solution(object):
    def numJewelsInStones(self, jewels, stones):

        count = 0
        J = set(jewels)

        for s in stones:
            if s in J:
                count += 1
        
        return count
        # Time: O(n + m)
        # Space: O(n)
        