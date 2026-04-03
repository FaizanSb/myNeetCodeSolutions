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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    dfsserialize(root,res) {
        if(!root) {
            res.push('N');
            return;
        }
        res.push(String(root.val));

        this.dfsserialize(root.left,res);
        this.dfsserialize(root.right,res);
        

    }
    serialize(root) {
        let result = [];
        this.dfsserialize(root,result);
        return result.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    dsfDeserial(vals,i) {
        if(vals[i.val] === 'N') {
            i.val++;
            return null;
        }
        let root = new TreeNode(parseInt(vals[i.val]));
        i.val++;
        root.left = this.dsfDeserial(vals,i);
        root.right = this.dsfDeserial(vals,i);

        return root;
    }
    deserialize(data) {
        let i = { val: 0 };
        let vals = data.split(',');
        return this.dsfDeserial(vals,i);
    }
}
