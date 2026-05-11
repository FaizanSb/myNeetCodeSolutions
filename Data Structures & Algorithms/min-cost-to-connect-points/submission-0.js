class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    // solve using prims algoritm
    minCostConnectPoints(points) {
         let n = points.length;

        // creating adjcency list of points with distance
        let adj = Array.from({ length: n }, () => []);
        for(let i = 0; i<n; i++ ) {
            for(let j = i+1; j<n; j++) {
                let xi = points[i][0];
                let yi = points[i][1];

                let xj = points[j][0];
                let yj = points[j][1];

                let dist = (Math.abs(xi-xj) + Math.abs(yi-yj));

                adj[i].push([j,dist]);
                adj[j].push([i,dist]);

            }
        }
        // console.log("Adjcency list is ",adj);
        return this.prims(adj,n);
    }
    prims(adj,n) {

        let sum = 0;
        let isMst = Array(n).fill(false);
        let pq = new MinPriorityQueue((item)=>item[0])

        // isMst[0] = true;
        pq.enqueue([0,0]);

        while(!pq.isEmpty()) {
            let [cost,node] = pq.dequeue();

            if(isMst[node]) continue;
            isMst[node] = true;
            sum +=cost;
            // exploring neighbors

            for(let [neigh,cost] of adj[node]) {
                if(!isMst[neigh]) {
                    pq.enqueue([cost,neigh]);
                }
            }
        }
        return sum;
    }
}
