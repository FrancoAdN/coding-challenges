class Solution(object):
    def romanToInt(self, s):
        sum = 0
        romans = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
    #    previous = 'I'
    #    for i in range(len(s)):
    #
    #        weight = romans[s[-i -1]]
    #       if weight < romans[previous]:
    #            sum -= weight
    #        else:
    #            sum += weight
    #            previous = s[-i-1]
    #        
    #    return sum
        n = len(s)
        i = 0
        while i < n:
            if i < n - 1 and romans[s[i]] < romans[s[i + 1]]:
                sum += romans[s[i + 1]] - romans[s[i]]
                i += 2
            else:
                sum += romans[s[i]]
                i += 1
        return sum
        # Time: O(n)
        # Space: O(1)
        