def isPalindrome(self, x: int) -> bool:
    original = x
    if not str(x).isdecimal():
        return False
    reversed = 0
    while x != 0:
        digit = x % 10  # last digit
        reversed = reversed * 10 + digit  # add to new place
        x //= 10
    return (reversed == original)
