function preorderTraversal(root: TreeNode | null): number[] {
    let output: number[] = [];
    return traversePreorder(root, output);
};

function traversePreorder(root: TreeNode | null, output: number[]): number[] {
    if (root == null) {
        return [];
    }
    output.push(root.val);
    traversePreorder(root.left, output);
    traversePreorder(root.right, output);
    return output;
}