class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        return this.solve(nums, target, 0, 0); // (nums,target,i,currsum);
    }
    solve(nums, target, i, currSum) {
        // check kry gy ka kia pora array traverse krny ka bad currSum target ky equal hua
        if (i === nums.length) {
            if (currSum === target) {
                return 1;
            } else {
                return 0;
            }
        }
        let plus = this.solve(nums, target, i + 1, currSum + nums[i]); // Agr plus kry gy to currSum ma nums[i] ko add kry gy
        let minus = this.solve(nums, target, i + 1, currSum - nums[i]); // agr minus ky gy to same minus

        return plus + minus;
    }
}
