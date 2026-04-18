class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    constructor() {
        this.set = new Set();
        this.memo = new Array(201).fill(-1);
    }

    wordBreak(s, wordDict) {
        let n = s.length;
        for(let word of wordDict) {
            this.set.add(word);
        }
        return this.solve(0, s, n);
    }
    
    solve(i, s, n) {

        if (i >= s.length) {
            return this.memo[i] = true;
        }

        if(this.memo[i] !== -1) {
            return this.memo[i];
        }

        // if (this.set.has(s[i])) {
        //     return this.memo[i] = true;
        // }

        for (let l = i + 1; l <= s.length; l++) {
            let tempStr = s.slice(i, l);

            if (this.set.has(tempStr) && this.solve(l, s,n)) {
                return this.memo[i] = true;
            }
        }
         return this.memo[i] = false;                                                                                                        
    }
}
