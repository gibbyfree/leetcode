function containsDuplicate(nums: number[]): boolean {
  let dup_set: Set<number> = new Set<number>(nums);
  return nums.length !== dup_set.size;
}
