class Solution:
    combos = []

    dialpad = {
        "0": "",
        "1": "",
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    def recur(self, visited, digits, idx):
        if idx >= len(digits):
            self.combos.append("".join(visited))
            return

        possible_chars = self.dialpad[digits[idx]]
        for c in possible_chars:
            self.recur(visited + c, digits, idx + 1)

    def letterCombinations(self, digits: str) -> List[str]:
        self.combos = []
        if len(digits) == 0:
            return []

        self.recur("", digits, 0)
        return self.combos
