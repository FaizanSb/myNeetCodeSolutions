class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    constructor() {
        this.memo = Array.from({ length: 101 }, () => Array(101).fill(-1));
    }
    checkValidString(s) {
        let n = s.length;
        return this.solve(0,0,s,n);
    }
    solve(i,open,s,n) {
        
        if(i>=n) {
           if(open === 0) return true;
           return false;
        }
        if(this.memo[i][open] !== -1) {
            return this.memo[i][open];
        }

        let isValid = false;
        if(s[i] === '(') {
           isValid = isValid || this.solve(i+1,open+1,s,n);
        }else if(s[i] === '*') {
            isValid = isValid || this.solve(i+1,open+1,s,n) // conside * as open braces
            isValid = isValid || this.solve(i+1,open,s,n) // conside * as empty str
            if(open > 0) 
            isValid = isValid || this.solve(i+1,open-1,s,n) // conside * as close bracket;
        }else if(open > 0) {
            isValid = isValid || this.solve(i+1,open-1,s,n) // closing bracket
        }

        return this.memo[i][open] = isValid;
    }
}
