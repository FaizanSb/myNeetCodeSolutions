class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    /// solve using BFS
    findCheapestPrice(n, flights, src, dst, k) {
        // create adjcency list from graph
        let adj = Array.from({ length: n }, () => []);

        for (let [u, v, d] of flights) {
            adj[u].push([v, d]);
        }
        // create a distance array and fill infinity
        let distance = new Array(n).fill(Infinity);
        distance[src] = 0;
        // create queue and noOfiteration based on k
        let queue = [];
        let stops = 0;
        queue.push([src, 0]); // (src,dist)

        while (queue.length > 0 && stops <= k) {
            let N = queue.length;
            while (N--) {
                let [node, dist] = queue.shift();
                for (let [v, d] of adj[node]) {
                    let updatedDist = dist + d;
                    if (distance[v] > updatedDist) {
                        distance[v] = updatedDist;
                        queue.push([v, updatedDist]);
                    }
                }
            }

            stops++;
        }

        return distance[dst] === Infinity ? -1 : distance[dst];
    }
}
