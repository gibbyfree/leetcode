/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let sortedNums: number[] = quickSort(nums, 0, nums.length - 1);
}

function quickSort(
  nums: number[],
  leftIdx: number,
  rightIdx: number
): number[] {
  let idx: number = 0;
  if (nums.length > 0) {
    idx = partition(nums, leftIdx, rightIdx);
    if (leftIdx < idx - 1) {
      // pull from left
      quickSort(nums, leftIdx, idx - 1);
    }
    if (idx < rightIdx) {
      // pull from right
      quickSort(nums, idx, rightIdx);
    }
  }
  return nums;
}

function partition(nums: number[], leftIdx: number, rightIdx: number): number {
  let middle: number = nums[Math.floor((leftIdx + rightIdx) / 2)];
  let i: number = leftIdx;
  let j: number = rightIdx;
  while (i <= j) {
    while (nums[i] < middle) {
      i++;
    }
    while (nums[j] > middle) {
      j--;
    }
    if (i <= j) {
      swapElements(nums, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function swapElements(nums: number[], leftIdx: number, rightIdx: number): void {
  let temp: number = nums[leftIdx];
  nums[leftIdx] = nums[rightIdx];
  nums[rightIdx] = temp;
}
