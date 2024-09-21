class Solution(object):
    def spiralOrder(self, matrix):
        ans = []
        M = len(matrix) - 1
        N = len(matrix[0])
        
        turn = True
        offset_x = 1
        offset_y = 1
        m = 0
        n = -1
        i = 0

        while len(ans) < len(matrix) * len(matrix[0]):
            i += 1
            if turn:
                n += offset_x
                if N == i:
                    offset_x = -1 * offset_x
                    N -= 1
                    i = 0
                    turn = False
            else:
                m += offset_y
                if M == i:
                    i = 0
                    offset_y = -1 * offset_y
                    M -= 1
                    turn = True

            ans.append(matrix[m][n])

        return ans
        # Time: O(M * N)
        # Space: O(M * N)



      





