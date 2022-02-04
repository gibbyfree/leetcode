def isValid(self, s: str) -> bool:
    stack = []
    for c in s:
        if (c == '{' or c == '[' or c == '('):  # opening
            stack.append(c)
        elif (len(stack) == 0):
            return False
        elif (c == '}'):
            prev = stack.pop()
            if (prev == '(' or prev == '['):
                return False
        elif (c == ']'):
            prev = stack.pop()
            if (prev == '{' or prev == '('):
                return False
        elif (c == ')'):
            prev = stack.pop()
            if (prev == '[' or prev == '{'):
                return False
    return (len(stack) == 0)
