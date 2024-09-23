class Solution(object):
    def canConstruct(self, ransomNote, magazine):
        map = {}
        for x in magazine:
            if not x in map:
                map[x] = 1
            else:
                map[x] += 1
        
        for c in ransomNote:
            if not c in map or map[c] == 0:
                return False
            
            map[c] -= 1
        
        return True
        # Time: O(n + m)
        # Space: O(n)

        