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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    constructor() {
            this.idx = 0;
    }
    create(preorder,inorder,start,end) {

        if(start > end) {
            return null;
        }

        let rootVal = preorder[this.idx];
        let i = start;
        for(; i<=end; i++) {
            if(inorder[i] === rootVal) {
                break;
            }
        }
        this.idx++;

        let root   =  new TreeNode(rootVal);
        root.left  =  this.create(preorder,inorder,start,i-1);
        root.right =  this.create(preorder,inorder,i+1,end);

        return root;

    }
    buildTree(preorder, inorder) {
        let size = preorder.length;
        let start = 0;
        let end = size-1;
       

        return this.create(preorder,inorder,start,end)
    }
}
