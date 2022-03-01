class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const output: TreeNode | null = recur(nums, 0, nums.length - 1);
  return output;
}

function recur(
  nums: number[],
  startIdx: number,
  endIdx: number
): TreeNode | null {
  if (startIdx > endIdx) {
    return null;
  }
  let middleIdx: number = Math.floor((startIdx + endIdx) / 2);
  let middleNode: TreeNode = new TreeNode(nums[middleIdx]);
  middleNode.left = recur(nums, startIdx, middleIdx - 1);
  middleNode.right = recur(nums, middleIdx + 1, endIdx);
  return middleNode;
}
