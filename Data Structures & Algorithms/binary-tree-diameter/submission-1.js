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
        // Left ki height find kry gy
        let leftHeight = this.findDiameter(root.left);
        // Right ki height find kry gy
        let rightHeight = this.findDiameter(root.right);
        // Dono ko add kry gy or compare kr ka update kry gy. add krny sa ham maximum diameter find kr skty hn.
        this.maxDiameter = Math.max(this.maxDiameter,leftHeight+rightHeight);
        
        // Height return kry gy each node ki beacuse ye upper comaprison ka lea use ho gi.
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
