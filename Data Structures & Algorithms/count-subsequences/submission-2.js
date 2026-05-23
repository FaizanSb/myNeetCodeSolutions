class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    constructor() {
        this.memo = Array.from({length:1001},()=>Array(1001).fill(-1));
    }
    numDistinct(s, t) {
       
        if (s.length < t.length) {
            return 0;
        }
        return this.solve(0, 0, s, t);
    }
    solve(i, j, s, t) {

        if (j === t.length) {
            return 1;
        }
        if (i === s.length) {
            return 0;
        }

        if(this.memo[i][j] !== -1) {
            return this.memo[i][j];
        }
        

        //Now core Part
        if (s[i] === t[j]) {
            let take = this.solve(i + 1, j + 1, s, t); // t ka character lo
            let skip = this.solve(i + 1, j, s, t); // t ka char skip kro and then check kr

            return this.memo[i][j] = take + skip;
        }
        // Agr current character match nhi hua to ham s ka next character move kry gy
        return this.memo[i][j] = this.solve(i + 1, j, s, t);
    }
}
