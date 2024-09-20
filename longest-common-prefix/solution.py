class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        n = float('inf')
        for s in strs:
            n = min(n, len(s))

        i = 0
        while i < n:
            for s in strs:
                if s[i] != strs[0][i]:
                    return s[:i]
            i += 1

        return strs[0][:i]

        # Time: O(N * M) N = len(strs), M = min_len words 
        # Space: O(1)
        