class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    constructor() {

        // Ham 2d array bnay gy becasuse 2 variables change ho rhy hn
        this.memo = Array.from({length:1001},() => new Array(1001).fill(-1));
        
    }
    lengthOfLIS(nums) {
        let n = nums.length;
        let p = -1; // Previous element abi choose nhi kea is lea p = -1 kea
        return this.solve(0,p,nums);
    }

    solve(i,p,nums) {
        if(i >= nums.length) {
            return 0;
        }
        // P+1 is lea use kry gy because agr p = -1 ho toh issue kry ga
        if(this.memo[i][p+1] !== -1) {
            return this.memo[i][p+1]
        }
        // Take kry gy next element ko based on condition 
        let take = -Infinity;
        if(p === -1 || nums[p] < nums[i]) {
            take = 1 + this.solve(i+1,i,nums);
        }
        // Otherwise skip every time chly ga
        let skip = this.solve(i+1,p,nums);

        return this.memo[i][p+1] =  Math.max(take,skip);
    }
}
