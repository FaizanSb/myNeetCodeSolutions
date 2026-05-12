class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    // Now solving this question using Dijkstra's algorithm
    swimInWater(grid) {
        let n = grid.length;
        let pq = new MinPriorityQueue((x) => x[0]);
        let dir = [
            [0, 1],
            [1, 0],
            [-1, 0],
            [0, -1],
        ];
        let visited = Array.from({ length: n }, () => Array(n).fill(false));

        pq.enqueue([grid[0][0], 0, 0]); // push(cost,row,column)

        while (!pq.isEmpty()) {
            let [cost, r, c] = pq.dequeue();
            if (r === n - 1 && c === n - 1) return cost;
            if (visited[r][c]) continue;
            visited[r][c] = true;
            for (let [nr, nc] of dir) {
                let newR = r + nr;
                let newC = c + nc;
                if (newR >= 0 && newC >= 0 && newC < n && newR < n && !visited[newR][newC]) {
                    let newCost = Math.max(grid[newR][newC], cost);
                    pq.enqueue([newCost, newR, newC]);
                }
            }
        }
        return -1;
    }
}
