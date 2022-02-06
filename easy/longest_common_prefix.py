def longestCommonPrefix(self, strs: List[str]) -> str:
    prefixes = {}
    for s in strs:
        as_char = list(s)
        sb = ""
        for c in as_char:
            sb = sb + c
            if sb in prefixes:
                val = prefixes.get(sb)
                prefixes[sb] = val + 1
            else:
                prefixes[sb] = 1
    output = ""
    for key in prefixes:
        val = prefixes.get(key)
        if val == len(strs) and len(key) > len(output):
            longest = val
            output = key
    return output
