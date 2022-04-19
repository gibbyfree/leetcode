from collections import Counter


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        dict_s = Counter(s)
        dict_t = Counter(t)
        for c in s:
            if c not in dict_t:
                return False
            else:
                if dict_t[c] != dict_s[c]:
                    return False
        return True
