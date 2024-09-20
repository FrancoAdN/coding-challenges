class Solution(object):
    def mergeAlternately(self, word1, word2):
        A, B = len(word1), len(word2)
        a, b = 0, 0
        turn = 0
        merged = []

        while (a < A) or (b < B):
            if a == A:
                turn = 1

            if b == B:
                turn = 0
            
            if turn == 0:
                merged.append(word1[a])
                a += 1
                turn = 1
            else:
                merged.append(word2[b])
                b += 1
                turn = 0

        return ''.join(merged)

        # Time: O(A + B)
        # Space: O(A + B)



            

            





        