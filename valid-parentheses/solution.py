class Solution(object):
    def isValid(self, s):
        map = {
            '{': '}',
            '[': ']',
            '(': ')'
        }
        stack = []

        for x in s:
            if x in map:
                stack.append(map[x])
            elif not stack or x != stack.pop():
                return False
        
        return not stack
        # Time: O(n)
        # Space: O(n)
                
            
        