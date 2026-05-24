class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    constructor() {
        this.memo = Array.from({ length: 101 }, ()=> Array(101).fill(-1));
    }
    minDistance(word1, word2) {
        let m = word1.length;
        let n = word2.length;

        return this.solve(0, 0, m, n, word1, word2);
    }

    solve(i, j, m, n, s, t) {
        if (i === m) {
            return n - j; // Basically add remaining characters in m
        }
        if (j === n) {
            return m - i; // Delete remaining characters of n;
        }

        if (this.memo[i][j] !== -1) {
            return this.memo[i][j];
        }

        if (s[i] === t[j]) {
            return (this.memo[i][j] = this.solve(i + 1, j + 1, m, n, s, t));
        } else {
            let insertChar = 1 + this.solve(i, j + 1, m, n, s, t);
            let deleteChar = 1 + this.solve(i + 1, j, m, n, s, t);
            let replaceChar = 1 + this.solve(i + 1, j + 1, m, n, s, t);

            return (this.memo[i][j] = Math.min(insertChar, deleteChar, replaceChar));
        }
    }
}
