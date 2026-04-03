/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if(!root) {
            return 0;
        }
        let leftHeight = this.maxDepth(root.left);
        let rightHeight = this.maxDepth(root.right);

        let maxHeight = 1 + Math.max(leftHeight,rightHeight);
        return maxHeight;
    }
}
