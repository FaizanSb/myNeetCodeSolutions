class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    constructor() {
        this.memo = new Array(46).fill(-1);
    }
    climbStairs(n) {
       return this.solve(n);
    }
    solve(n) {
    
        if(n<0) {
            return 0;
        }

        if(this.memo[n] !== -1) {
            return this.memo[n];
        }

        if(n===0) {
            return 1;
        }

        let solveOne = this.solve(n-1);
        let solveTwo = this.solve(n-2);

        return this.memo[n] = solveOne + solveTwo;
    }
}
