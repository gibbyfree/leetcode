/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let startIdx: number = 0;
  let endIdx: number = s.length - 1;

  while (startIdx < endIdx) {
    // [1, 2, 3]
    let temp: string = s[startIdx]; // [1]
    s[startIdx++] = s[endIdx]; // [3, 2, 3]
    s[endIdx--] = temp; // [3, 2, 1]
  }
}
