class Solution(object):
    def threeSum(self, nums):
        triplets = []
        nums.sort()

        for i in range(len(nums)):
            if nums[i] > 0:
                break
            elif i > 0 and nums[i] == nums[i-1]:
                continue
            target = -nums[i]

            l = i + 1
            r = len(nums) - 1

            while l < r:

                sum = nums[l] + nums[r]
                if sum == target:

                    triplets.append([nums[i], nums[l], nums[r]])
                    l, r = l+1, r-1
                    while l < r and nums[l] == nums[l-1]:
                        l += 1
                    while l < r and nums[r] == nums[r+1]:
                        r -= 1
    
                elif sum > target:
                    r -= 1
                else:
                    l += 1
        
        return triplets

        # Time: O(n^2)
        # Space: O(n)




        