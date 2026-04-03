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
    // constructor() {
    //     this.diff = Infinity;
    // }

    checkHeight(root) {
        if(!root) {
            return 0;
        }

        let leftHeight = this.checkHeight(root.left);
        if(leftHeight === -1) return -1;
        let rightHeight = this.checkHeight(root.right);
        if(rightHeight === -1) return -1
        //console.log(`Left Height ${leftHeight} and right is ${rightHeight}`)

        if(Math.abs(leftHeight - rightHeight) > 1){
            return -1;
        }

        return Math.max(leftHeight,rightHeight) + 1;
    }
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        if(!root) {
            return true;
        }

        return this.checkHeight(root) !== -1;
    }
        
}
