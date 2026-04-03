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
    constructor() {
        this.maxDiameter = 0;
    }

    findDiameter(root) {
        if(!root) {
            return 0;
        }
        let leftHeight = this.findDiameter(root.left);
        let rightHeight = this.findDiameter(root.right);

        this.maxDiameter = Math.max(this.maxDiameter,leftHeight+rightHeight);

        return Math.max(leftHeight,rightHeight) + 1;
    }

    diameterOfBinaryTree(root) {
        if(!root) {
            return 0;
        }
        this.findDiameter(root);
        return this.maxDiameter;
    }
}
