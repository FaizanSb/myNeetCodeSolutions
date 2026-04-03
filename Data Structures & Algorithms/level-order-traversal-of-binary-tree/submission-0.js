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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(root === null) {
            return [];
        }
        let que = [];
        let result = [];
        que.push(root);
        
        while(que.length !== 0) {
            let levelSize = que.length;
            let currLevel = [];

            for(let i=0;i<levelSize;i++) {
                let node = que.shift();
                currLevel.push(node.val);
                if(node.left) {
                    que.push(node.left)
                }
                if(node.right) {
                    que.push(node.right);
                }
            }
            result.push(currLevel);

        }
        return result;
    }
}
