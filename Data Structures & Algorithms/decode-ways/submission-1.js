class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    constructor() {
        this.memo = new Array(101).fill(-1);
    }
    numDecodings(s) {
        let n = s.length;
        return this.solve(0,n,s);
    }

    solve(i,n,s) {
        
        if(i>=n) {
            return this.memo[i] = 1;
        }
        if(this.memo[i] !== -1) {
            return this.memo[i];
        }

        if(s[i] === '0') {
            return this.memo[i] =  0;
        }

        let one_number = this.solve(i+1,n,s);
        let second_num = 0;

        // if(i+2 < n && (s[i]===1 || (s[i]===0 && s[i+1] <=6))) {

        // }
        if(i+1 < n) {
            if(s[i] === '1' || (s[i] === '2' && s[i+1] <=6)) {
                second_num = this.solve(i+2,n,s);
            }
        }
        return this.memo[i] = one_number + second_num;
    }
}
