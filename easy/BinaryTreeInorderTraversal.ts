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

function inorderTraversal(root: TreeNode | null): number[] {
  let output: number[] = [];
  return traverse(root, output);
}

function traverse(root: TreeNode | null, output: number[]): number[] {
  if (root == null) {
    return [];
  }
  traverse(root.left, output);
  output.push(root.val);
  traverse(root.right, output);

  return output;
}
