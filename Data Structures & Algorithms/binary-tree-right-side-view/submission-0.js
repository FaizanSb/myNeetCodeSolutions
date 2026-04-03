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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) {
            return [];
        }
        let result = [];
        let que = [];
        que.push(root);

        while(que.length !== 0) {
            let levelSize = que.length;
            
            for(let i = 0; i<levelSize; i++) {
                let node = que.shift();
                if(i == levelSize-1) {
                    result.push(node.val);
                }
                if(node.left)  que.push(node.left);
                if(node.right) que.push(node.right);
            }
        }

        return result;
    }
}
