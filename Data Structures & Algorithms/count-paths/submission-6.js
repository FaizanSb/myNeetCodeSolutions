class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    // constructor() {
    //     this.memo = Array.from({length:101},()=>Array(101).fill(-1));
    // }
    // Using bottom up appraoch
    uniquePaths(m, n) {
        let grid = Array.from({ length: m }, () => Array(n).fill(0));

        // top row
        for (let j = 0; j < n; j++) {
            grid[0][j] = 1;
        }
        // 1st column
        for (let i = 0; i < m; i++) {
            grid[i][0] = 1;
        }

        // Now calculating path
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
            }
        }
        return grid[m - 1][n - 1];
    }
}
