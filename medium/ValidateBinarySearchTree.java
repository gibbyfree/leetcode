/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class ValidateBinarySearchTree {
    public boolean isValidBST(TreeNode root) {
        ArrayList<Integer> inorder = traverse(root, new ArrayList<Integer>());
        
        for (int i = 1; i < inorder.size(); i++) {
            if (inorder.get(i - 1) >= inorder.get(i)) return false;
        }
        
        return true;
    }
    
    public ArrayList<Integer> traverse(TreeNode root, ArrayList<Integer> visited) {
        if (root == null) return visited;
        
        if (root.left != null) {
            visited = traverse(root.left, visited);
        }
        
        visited.add(root.val);
        
        if (root.right != null) {
            visited = traverse(root.right, visited);
        }
        
        return visited;
        
    }
}