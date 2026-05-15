class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    constructor() {
        this.memo = Array.from({length:101},()=>Array(101).fill(-1));
    }
    uniquePaths(m, n) {
        
        return this.solve(0,0,m,n);
    }
    solve(i,j,r,c) {
        if(this.memo[i][j] !== -1) return this.memo[i][j];

        if(i<0 || j<0 || i>=r || j>=c) {
            return 0;
        }
        

        if((i===r-1) && (j===c-1)) {
            return 1;
        }
        let right = this.solve(i,j+1,r,c);
        let down = this.solve(i+1,j,r,c);
        return this.memo[i][j] = right+down;
    }
}
