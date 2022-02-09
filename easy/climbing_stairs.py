# fibonacci sequence
def recur(self, n: int, memo: dict) -> int:
    result = 0
    if n in memo:
        return memo[n]
    if n == 1:
        return 1
    if n == 2:
        return 2
    result = self.recur(n - 1, memo) + self.recur(n - 2, memo)
    memo[n] = result
    return result


def climbStairs(self, n: int) -> int:
    memo = {}
    return self.recur(n, memo)
