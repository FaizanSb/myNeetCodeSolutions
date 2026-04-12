class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    // Ma idr ak recursive function use kron ga to check palindrome
    isPalindrome(s,i,j) {
        if(i>=j) {
            return true;
        }

        if(s[i] !== s[j]) {
            return false;
        }

        return this.isPalindrome(s,i+1,j-1);
       

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
