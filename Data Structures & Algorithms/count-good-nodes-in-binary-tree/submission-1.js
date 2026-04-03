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
    goodNodes(root) {
        let count = 0;
        let que = new Queue();
        que.push([root,-Infinity])

        while(!que.isEmpty()) {
            let [node,maxVal] = que.pop();
            if(node.val >= maxVal ) {
                count++;
            }
            if(node.left) que.push([node.left,Math.max(maxVal,node.val)])

            if(node.right) que.push([node.right,Math.max(maxVal,node.val)])
        }
        return count;
    }
}
