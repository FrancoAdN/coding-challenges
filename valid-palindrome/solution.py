class Solution(object):
    def isPalindrome(self, s):
        a = ord('a')
        z = ord('z')
        l = 0
        r = len(s) - 1
        zero = ord('0')
        nine = ord('9')

        while l <= r:
            c1 = ord(s[l].lower())
            c2 = ord(s[r].lower())

            if (c1 < a or c1 > z) and (c1 < zero or c1 > nine):
                l += 1
                continue
            
            if (c2 < a or c2 > z) and (c2 < zero or c2 > nine):
                r -= 1
                continue

            '''
            if not s[L].isalnum():
                L += 1
                continue

            if not s[R].isalnum():
                R -= 1
                continue
            '''
            
            if c1 != c2:
                return False
            
            l += 1
            r -= 1
        
        return True
        # Time: O(n)
        # Space: O(1)

        