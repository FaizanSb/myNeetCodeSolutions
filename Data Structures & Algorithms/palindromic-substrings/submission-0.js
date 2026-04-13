class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let len = 0;
        for(let i = 0; i<s.length; i++) {
            for(let j= i; j<s.length; j++) {
                if(this.solve(i,j,s)) {
                    len++;
                }
            }
        }
        return len;
    }
    solve(i,j,s) {
        if(i>=j) {
            return true;
        }
        if(s[i] !== s[j]) {
            return false;
        }
        return this.solve(i+1,j-1,s);
    }
}
