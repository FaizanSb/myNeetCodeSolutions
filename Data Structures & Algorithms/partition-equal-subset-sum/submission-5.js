class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // constructor() {
       
    // }
    canPartition(nums) {
        // let n = nums.length;
        // if(n%2 !== 0) {
        //     return false;
        // }
        let sum = nums.reduce((acc, n) => n + acc, 0);
        if(sum % 2 !== 0) {
            return false;
        }
        let target_Sum = sum / 2;
        this.memo = Array.from({length: 201}, () => Array(10001).fill(-1));

        return this.solve(nums, 0, target_Sum);
    }
    solve(nums, i, t) {
        if(this.memo[i][t] !== -1) {
            return this.memo[i][t];
        }
        if (t === 0) {
            return this.memo[i][t] = true;
        }
        if (i >= nums.length) {
            return this.memo[i][t] = false;
        }
        let take = false;
        if (nums[i] <= t) {
            // take
            take = this.solve(nums, i + 1, t - nums[i]);
        }
        // Skip
        let skip = this.solve(nums, i + 1, t);

        return this.memo[i][t] = take || skip;
    }
}
