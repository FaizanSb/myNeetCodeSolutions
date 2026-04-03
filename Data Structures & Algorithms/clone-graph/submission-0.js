/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    constructor() {
        this.map = new Map();

    }
    dfs(nodes,cloneNode) {
        for(let n of nodes.neighbors)  {
            if(this.map.has(n)) {
                cloneNode.neighbors.push(this.map.get(n));
            } else {
                let clone = new Node(n.val);
                this.map.set(n,clone);
                cloneNode.neighbors.push(clone);
                this.dfs(n,clone);
            }
        }
    }

    cloneGraph(node) {
        if(!node) {
            return null;
        }
        // if(node.length === 0) {
        //     return []
        // }
        // Clone Node bna lay gy 
        let cloneNode = new Node(node.val);
        this.map.set(node,cloneNode);
        this.dfs(node,cloneNode)
        return cloneNode;

    }   
}
