class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        output = []
        self.backtrack(nums, output, [])
        return output

    def backtrack(self, nums, output, to_visit):
        if len(nums) == 0:
            output.append(to_visit)
        for i in range(len(nums)):
            self.backtrack(nums[:i] + nums[i + 1:],
                           output, to_visit + [nums[i]])
