class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        N = len(temperatures)
        ans = [0] * N
        stack = [[temperatures[0], 0]]

        for i in range(1, N):
            curr = temperatures[i]
            while stack and curr > stack[-1][0]:
                idx = stack.pop()[1]
                ans[idx] = i - idx
            stack.append([curr, i])
        
        return ans
        # Time: O(n)
        # Space: O(n)
        