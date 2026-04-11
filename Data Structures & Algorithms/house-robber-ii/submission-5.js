class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // agr ma Bottom Up use kron ga 
    constructor() {
        this.dp = null;
        this.n = 0;
    }
    rob(nums) {
       this.n = nums.length;
       if(this.n===1) {
        return nums[0];
       }
        // take 1st house
       let takeFirst = this.robber(nums,0,nums.length-2);
       // take 2nd house
       let takeSecond = this.robber(nums,1,nums.length-1);

       return Math.max(takeFirst,takeSecond);
    }

    robber(nums,s,e) {
        this.dp = new Array(e+1).fill(0);
        this.dp[s] = nums[s];

        for(let i = s+1; i<=e; i++) {
            let take = nums[i] + ((i >= 2) ? this.dp[i - 2] : 0);
            let skip = this.dp[i-1];

            this.dp[i] = Math.max(take,skip)
        }
        return this.dp[e];
    }
}
