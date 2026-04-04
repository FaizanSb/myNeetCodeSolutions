class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(edges.length !== n-1) return false;

        let adj = Array.from({length:n},()=>[]);
        let visited = new Array(n).fill(false);
        let que = [];
        for(let [u,v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }
        que.push([0,1]);

        while(que.length > 0) {
            let [node,parent] = que.shift();
            visited[node] = true;

            for(let neigh of adj[node]) {
                if(!visited[neigh]) {
                    que.push([neigh,node])
                }else if(neigh !== parent) {
                    return false;
                }
            }
        }
        return visited.every(e=>e === true);
    }
}
