function postorderTraversal(root: TreeNode | null): number[] {
  let output: number[] = [];
  return traversePostorder(root, output);
}

function traversePostorder(root: TreeNode | null, output: number[]): number[] {
  if (root == null) {
    return [];
  }
  traversePostorder(root.left, output);
  traversePostorder(root.right, output);
  output.push(root.val);
  return output;
}
