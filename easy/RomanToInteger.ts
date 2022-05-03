function romanToInt(s: string): number {
  const num_map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let output: number = 0;
  for (let i: number = 0; i < s.length; i++) {
    if (num_map[s[i]] < num_map[s[i + 1]] && i + 1 !== s.length) {
      output -= num_map[s[i]];
    } else {
      output += num_map[s[i]];
    }
  }

  return output;
}
