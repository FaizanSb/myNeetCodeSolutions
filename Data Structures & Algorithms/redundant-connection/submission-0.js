class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        let n = edges.length;
        let adj = Array.from({length:n+1},()=>[]);

        for(let [u,v] of edges) {
            // agr cycle exist kry ga to return kar day gy
            if(this.BFS(u,v,adj,n)) return [u,v];
            // otherwise add kr day gy adj ma
            adj[u].push(v);
            adj[v].push(u);

        }
        return [];
    }

    BFS(src,target,adj,n) {
        
        let visited = new Array(n+1).fill(false);
        let que = [];

        que.push(src);


        while(que.length > 0) {
            const node = que.shift();

            if(node === target) {
                return true;
            }

            for(let neig of adj[node]) {
                if(!visited[neig]) {
                    que.push(neig);
                    visited[neig] = true;
                }
           }

        }
        return false;
    }
}
