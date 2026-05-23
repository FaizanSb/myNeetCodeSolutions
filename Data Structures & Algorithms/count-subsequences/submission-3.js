class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        let rows = s.length;
        let cols = t.length;

        let grid = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));

        for (let i = 0; i <= rows; i++) {
            grid[i][cols] = 1;
        }

        for (let i = rows - 1; i >= 0; i--) {
            for (let j = cols - 1; j >= 0; j--) {
                if (s[i] === t[j]) {
                    let take = grid[i + 1][j + 1];
                    let skip = grid[i + 1][j];

                    grid[i][j] = take + skip;
                } else {
                    grid[i][j] = grid[i + 1][j];
                }
            }
        }
        return grid[0][0];
    }
}
