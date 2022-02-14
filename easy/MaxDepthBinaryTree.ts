function maxDepth(root: TreeNode | null): number {
  if (root == null) {
    return 0;
  }

  let leftMax: number = maxDepth(root.left);
  let rightMax: number = maxDepth(root.right);

  if (leftMax > rightMax) {
    return leftMax + 1;
  } else {
    return rightMax + 1;
  }
}
