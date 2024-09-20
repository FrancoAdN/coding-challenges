class Solution(object):
    def isSubsequence(self, s, t):
        S = len(s)
        T = len(t)

        if s == '': return True
        if S > T: return False
        
        j = 0

        for i in range(T):
            if s[j] == t[i]:
                if j == S-1:
                    return True
                j += 1
           
        
        return False

        # Time: O(T)
        # Space: O(1)

        