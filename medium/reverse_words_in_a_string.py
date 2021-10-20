def reverse_words(self, s: str) -> str:
        s = s.strip()
        words = s.split()
        return ' '.join(reversed(words))