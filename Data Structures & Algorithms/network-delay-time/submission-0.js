class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {

        // Build graph
        let graph = Array.from({ length: n + 1 }, () => []);

        for (let [u, v, t] of times) {
            graph[u].push([v, t]);
        }

        // Distance array
        let dist = new Array(n + 1).fill(Infinity);

        dist[k] = 0;

        // Min Heap
        let pq = new MinPriorityQueue((item) => item[0]);

        // [distance,node]
        pq.enqueue([0, k]);

        // Dijkstra
        while (!pq.isEmpty()) {

            let [currDis, node] = pq.dequeue();

            // Skip old entries
            if (currDis > dist[node]) continue;

            // Explore neighbors
            for (let [neigb, weight] of graph[node]) {

                let newDist = currDis + weight;

                if (newDist < dist[neigb]) {

                    dist[neigb] = newDist;

                    pq.enqueue([newDist, neigb]);
                }
            }
        }

        // Check unreachable nodes
        for (let i = 1; i <= n; i++) {

            if (dist[i] === Infinity) {
                return -1;
            }
        }

        // Return maximum distance
        return Math.max(...dist.slice(1));
    }
}