class Solution(object):
    def rotate(self, matrix):
        N = len(matrix)

        # Transpose
        for i in range(N):
            for j in range(i+1, N):
                temp = matrix[i][j]
                matrix[i][j] = matrix[j][i]
                matrix[j][i] = temp


        # Horizontal reflection
        for i in range(N):
            for j in range(N // 2):
                temp = matrix[i][j]
                matrix[i][j] = matrix[i][N-j-1]
                matrix[i][N-j-1] = temp

        # Time: O(N^2)
        # Space: O(1)


        