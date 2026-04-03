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
     * @return {boolean}
     */
    // Ma idr resursive approach use nhi krron ga but iterative use kron ga
    isValidBST(root) {
        let stack = [];
        let prev = -Infinity;
        let current = root;

        while(stack.length > 0 || current !== null) {

            while(current !== null) {
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();

            if(current.val <= prev) return false;

            prev = current.val;
            current = current.right;
        }
        return true;
    }
}
