class Solution:

    def max_val_key(self, d) -> int:
        v = list(d.values())
        k = list(d.keys())
        return k[v.index(max(v))]

    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count_dict = {}
        for n in nums:
            if n not in count_dict:
                count_dict[n] = 1
            else:
                val = count_dict[n]
                count_dict[n] = val + 1
        output = []
        for x in range(k):
            max_key = self.max_val_key(count_dict)
            output.append(max_key)
            count_dict.pop(max_key)

        return output
