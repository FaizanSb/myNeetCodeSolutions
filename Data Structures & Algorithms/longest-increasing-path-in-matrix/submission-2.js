class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     *
     * Intution Kuch asa ha
     * 1. Ham grid kay element pay jay gy and check kr le gy
     *    kitny no of increasing elements ka end ha ye path.
     * 2. Fir ham traverse kry gy using DFS and result ko return kry gy at the end
     */

    constructor() {
        this.memo = Array.from({ length: 101 }, () => Array(101).fill(-1));
    }
    longestIncreasingPath(matrix) {
        let rows = matrix.length;
        let cols = matrix[0].length;

        let result = 0; // Ak resultant variable to store longest increasing
        // Har index pay ham check kry gy ka kia ye kitna maximum ha
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                result = Math.max(result, this.dfs(matrix, i, j));
            }
        }
        return result;
    }

    dfs(matrix, i, j) {
        // console.log("Ma dfs ma hon");
        if (this.memo[i][j] !== -1) {
            return this.memo[i][j];
        }
        let answer = 1;
        let dir = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ];

        for (let [dr, dc] of dir) {
            let i_ = i + dr;
            let j_ = j + dc;

            if (this.safe(i_, j_, matrix) && matrix[i_][j_] > matrix[i][j]) {
                answer = Math.max(answer, 1 + this.dfs(matrix, i_, j_));
            }
        }

        return (this.memo[i][j] = answer);
    }

    safe(i, j, matrix) {
        if (i >= 0 && j >= 0 && i < matrix.length && j < matrix[0].length) {
            return true;
        }
        return false;
    }
}
