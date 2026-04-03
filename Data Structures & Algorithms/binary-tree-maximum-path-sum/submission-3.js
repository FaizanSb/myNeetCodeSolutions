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
        this.maxSum = -Infinity;
    }
    findSum(root) {
        if(!root) {
            return 0;
        }

        let left = this.findSum(root.left);
        let right = this.findSum(root.right);

        let donoAchy = left + right + root.val;
        let koiAkAcha = Math.max(left,right) + root.val;
        let sirfRootAcha = root.val;
        this.maxSum = Math.max(this.maxSum,koiAkAcha,sirfRootAcha,donoAchy);
        return Math.max(koiAkAcha,sirfRootAcha);
    }
    maxPathSum(root) {
        if(!root.left && !root.right) {
            return root.val;
        }
        this.findSum(root);
        return this.maxSum;
    }
}
