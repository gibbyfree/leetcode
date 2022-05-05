class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        output = []
        subset = []
        self.backtrack(output, nums, subset, 0)
        return output

    def backtrack(self, output, nums, subset, index):
        if index == len(nums):
            output.append(subset)
            return

        self.backtrack(output, nums, subset + [nums[index]], index + 1)
        self.backtrack(output, nums, subset, index + 1)
