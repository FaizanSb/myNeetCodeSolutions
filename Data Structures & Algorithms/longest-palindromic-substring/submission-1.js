class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    constructor() {
       this.memo = Array.from({length:1001}, () => new Array(1001).fill(-1));
    }
    // Ma idr ak recursive function use kron ga to check palindrome
    isPalindrome(s,i,j) {
        if(i>=j) {
            return 1;
        }
        if(this.memo[i][j] !== -1) {
            return this.memo[i][j] = 0;

        }
        if(s[i] !== s[j]) {
            return 0;
        }

        return this.memo[i][j] = this.isPalindrome(s,i+1,j-1);
       

    }
    longestPalindrome(s) {
        let n = s.length;
        let length_str = -Infinity;
        let startIndex = -1;

        for(let i=0; i<n; i++) {
            for(let j=i; j<n;j++) {
                if(this.isPalindrome(s,i,j)) {
                    if(j-i+1 > length_str) {
                        length_str = Math.max(j-i+1,length_str)
                        startIndex = i;
                    }
                    
                }
            }
        }
        return s.slice(startIndex, startIndex + length_str);
    }
}
