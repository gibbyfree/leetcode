function isPalindrome(s: string): boolean {
  const regex = /[^A-Za-z0-9]/g;
  let no_punct: string = s.replace(regex, "");
  let parsed: string = no_punct.replace(/\s/g, "").toLowerCase();

  let stack = [];
  let mid = Math.floor(parsed.length / 2);
  let i: number;
  // first half of string in stack
  for (i = 0; i < mid; i++) {
    stack.push(parsed[i]);
  }

  // ignore the spare character if it's an odd length string "ABA"
  if (parsed.length % 2 != 0) {
    i++;
  }

  let element: string;
  while (i != parsed.length) {
    element = stack.pop();

    if (element != parsed[i]) {
      return false;
    }
    i++;
  }
  return true;
}
