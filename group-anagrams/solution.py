class Solution(object):
    def groupAnagrams(self, strs):
        map = {}
        for s in strs:
            freq = [0] * 26
            for c in s:
                freq[ord(c) - ord("a")] += 1
            # arrays are mutuable, hence not hashable
            # cast the array into a tuple to make it hashable
            key = tuple(freq)

            if not key in map:
                map[key] = [s]
            else:
                map[key].append(s)
        
        # The values of each key is the answer to the problem
        return map.values()

        # n is the number of strings, m is the length of largest string
        # Time: O(n * m)
        # Space: O(n * m)


