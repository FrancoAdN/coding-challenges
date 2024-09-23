class Solution(object):
    def maxNumberOfBalloons(self, text):
        s = set("balloon")
        counter = {}
 
        for c in text:
            if c in s:
                if c in counter:
                    counter[c] += 1
                else:
                    counter[c] = 1
        

        for key in s:
            if not key in counter: 
                return 0 

        return min(counter['b'], counter['a'], counter['l'] // 2, counter['o'] // 2, counter['n'])
        
        # Time: O(n)
        # Space: O(1)


                

        