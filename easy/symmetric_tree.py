from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def recur(self, node_a: Optional[TreeNode], node_b: Optional[TreeNode]) -> bool:
        if node_a is None and node_b is None:
            return True
        if node_a is None or node_b is None:
            return False
        if node_a.val != node_b.val:
            return False
        return self.recur(node_a.left, node_b.right) and self.recur(node_a.right, node_b.left)

    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        return root is None or self.recur(root.left, root.right)
