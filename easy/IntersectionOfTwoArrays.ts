function intersection(nums1: number[], nums2: number[]): number[] {
  let output: Set<number> = new Set<number>();
  let seen: Set<number> = new Set<number>();
  for (const n of nums1) {
    seen.add(n);
  }
  for (const n of nums2) {
    if (seen.has(n) && !output.has(n)) {
      output.add(n);
    }
  }
  return [...output];
}
