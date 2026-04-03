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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSame(r,s) {
      
         if(r === null && s === null) {
            return true;
        }
        if(r === null || s === null) {
            return false;
        }
        if(r.val !== s.val) {
            return false;
        }

        return this.isSame(r.left,s.left) && this.isSame(r.right,s.right);
    }

    isSubtree(root, subRoot) {
        let val = null;

        console.log("Now i am starting ")
        if(root === null && subRoot === null) {
            return true;
        }

        if(root === null || subRoot === null) {
            return false;
        }

        if(this.isSame(root,subRoot)) {
            return true;
        }
        
       return this.isSubtree(root.left,subRoot) || this.isSubtree(root.right,subRoot);       
      
        
    }
}
