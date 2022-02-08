// simple binary search implementation
function searchInsert(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;
  let mid = Math.floor((low + high) / 2);
  while (low <= high) {
    if (nums[mid] === target) {
      return mid; // index
    } else if (target > nums[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
    mid = Math.floor((low + high) / 2);
  }
  return low;
}
