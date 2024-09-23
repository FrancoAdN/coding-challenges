class Solution(object):
    def isValidSudoku(self, board):

        # Check rows
        for row in board:
            s = set()
            for n in row:
                if n in s:
                    return False
                if n != '.':
                    s.add(n)
        
        # Check cols
        for i in range(len(board)):
            s = set()
            for j in range(len(board)):
                if board[j][i] in s:
                    return False

                if board[j][i] != '.':
                    s.add(board[j][i])

        # Check boxes
        boxes = [
            (0, 0), (0, 3), (0, 6),
            (3, 0), (3, 3), (3, 6),
            (6, 0), (6, 3), (6, 6),
        ]

        for box in boxes:
            x, y = box
            s = set()
            for i in range(x, x + 3):
                for j in range(y, y + 3):
                    if board[i][j] in s:
                        return False

                    if board[i][j] != '.': 
                        s.add(board[i][j])
        
        return True
        # Time: O(n^2)
        # Space: O(n^2)

