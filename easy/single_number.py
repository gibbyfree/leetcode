def singleNumber(self, nums: List[int]) -> int:
    freq = {}
    for n in nums:
        if n not in freq:
            freq[n] = 1
        else:
            val = freq[n]
            freq[n] = val + 1

    for k, v in freq.items():
        if v == 1:
            return k
