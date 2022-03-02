function isSubsequence(s: string, t: string): boolean {
  if (s.length == 0) {
    return true;
  }
  let i: number = 0;
  let j: number = 0;

  while (i < s.length && j < t.length) {
    if (s.charAt(i) == t.charAt(j)) {
      i++; // shift pointer
    }
    j++; // shift on orig string

    if (i == s.length) {
      // all chars found in orig string
      return true;
    }
  }

  return false;
}
