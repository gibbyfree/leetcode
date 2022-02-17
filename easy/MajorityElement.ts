function majorityElement(nums: number[]): number {
  let m = new Map();
  for (let i of nums) {
    if (m.has(i)) {
      let val: number = m.get(i) + 1;
      m.set(i, val);
    } else {
      m.set(i, 1);
    }
  }
  let maj: number = 0;
  let output: number;
  for (let k of m.keys()) {
    if (m.get(k) > maj) {
      maj = m.get(k);
      output = k;
    }
  }

  return output;
}
