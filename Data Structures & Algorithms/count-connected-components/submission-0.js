class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adj = Array.from({length:n},()=>[]);
        let visited = new Array(n).fill(false);
        let count = 0;

        for(let [u,v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        for(let node=0;node<n;node++) {
            if(!visited[node]) {
                this.dfs(visited,adj,node);
                count++;
            }           
            
        }
        return count;
    }

    dfs(visited,adj,node) {
      visited[node] = true;  

      for(let neighbour of adj[node]) {
        if(!visited[neighbour]) {
            
           this.dfs(visited,adj,neighbour);
        }

      }

    }

}
