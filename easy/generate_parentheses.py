class Solution:
    combos = []

    def recur_generate(self, sb: str, opens: int, closeds: int, n: int):
        if opens == n and closeds == n:  # reached n sets
            self.combos.append(sb)
            return

        if opens < n:  # combo is determined by # of consecutive open parens
            self.recur_generate(sb + "(", opens + 1, closeds, n)

        if closeds < opens:
            self.recur_generate(sb + ")", opens, closeds + 1, n)

    def generateParenthesis(self, n: int) -> List[str]:
        self.combos = []
        self.recur_generate("", 0, 0, n)
        return self.combos
