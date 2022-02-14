function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  let result: boolean = true;
  function traverse(p: TreeNode | null, q: TreeNode | null): void {
    if (p && q) {
      if (p.val !== q.val) {
        result = false;
      } else {
        traverse(p.left, q.left);
        traverse(p.right, q.right);
      }
    } else if (p || q) {
      // one null, but not the other
      result = false;
    }
  }
  traverse(p, q);
  return result;
}
