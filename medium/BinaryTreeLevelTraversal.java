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
class BinaryTreeLevelTraversal {
    public List<List<Integer>> levelOrder(TreeNode root) {
        if (root == null) {
            return new ArrayList<>();
        }
        
        List<List<Integer>> output = new ArrayList<>();
        recur(root, output, 0);
        return output;
    }
    
    public void recur(TreeNode root, List<List<Integer>> output, int depth) {
        if (output.size() <= depth) {
            ArrayList<Integer> childList = new ArrayList<>();
            childList.add(root.val);
            output.add(childList); 
        } else {
            output.get(depth).add(root.val); // add to level again
        }
        
        if (root.left != null) {
            recur(root.left, output, depth + 1);
        }
        
        if (root.right != null) {
            recur(root.right, output, depth + 1);
        }
    }
}