class Solution(object):
    def twoSum(self, numbers, target):
        l = 0
        r = len(numbers) - 1
        while l <= r:
            n1 = numbers[l]
            n2 = numbers[r]
            sum = n1 + n2

            if sum == target:
                return [l+1, r+1]
            
            if sum > target:
                r -= 1
            else:
                l += 1

        # Time: O(n)
        # Space: O(1)
    

        