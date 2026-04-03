class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    constructor() {
        this.res = [];
        this.temp = [];
    }

    isPalindrome(start,end,str) {
        while(start <= end) {
            if(str[start] !== str[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;

    }

    solve(str,idx) {
        if(idx === str.length) {
            this.res.push([...this.temp]);
            return;
        }
        for(let i = idx; i< str.length; i++) {

            if(this.isPalindrome(idx,i,str)) {
                this.temp.push(str.slice(idx,i+1));
                this.solve(str,i+1);
                this.temp.pop();
            }
        }
    }
    
    partition(str) {
        let idx = 0;
        this.solve(str,idx);
        return this.res;
    }
}
