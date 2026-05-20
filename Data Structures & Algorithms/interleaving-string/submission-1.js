class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    // Now lets memoize
    constructor() {
        this.memo = Array.from({length:101},()=>Array(101).fill(-1));
    }
    isInterleave(s1, s2, s3) {
        if(s1.length + s2.length !== s3.length) {
            return false;
        }
        return this.solve(0,0,s1,s2,s3);
    }
    solve(i,j,s1,s2,s3) {

        // Agr 3no ak sath out of bound ho jay to true return kry gy
        if(i===s1.length && j===s2.length && i+j===s3.length) {
            return true;
        }
        // Agr k greater ho jay and and first case fail ho jay to kuch miss match ha
        if(i+j>=s3.length) {
            return false;
        }
        if(this.memo[i][j] !== -1) return this.memo[i][j];
        let result = false;
        if(s3[i+j]===s1[i]) {
           result =  this.solve(i+1,j,s1,s2,s3);
        }
        // Agr phly he result true mill gea to next explore ki zarorat nhi
        if(result) {
            return this.memo[i][j] =result;
        }

        if(s3[i+j] === s2[j]) {
            return this.solve(i,j+1,s1,s2,s3);
        }

        return this.memo[i][j] = result;

    }
}
