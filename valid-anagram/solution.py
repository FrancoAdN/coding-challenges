class Solution(object):
    def isAnagram(self, s, t):
        if len(s) != len(t):
            return False

        counter = {}

        for c in s:
            if not c in counter:
                counter[c] = 1
            else: 
                counter[c] += 1
        
        for c in t:
            if c not in counter:
                return False
            counter[c] -= 1
            if counter[c] == 0:
                del counter[c]

        # for key in counter:
        #     if counter[key] != 0:
        #         return False
        
        return not counter
        # Time: O(n)
        # Space: O(n)


            


        