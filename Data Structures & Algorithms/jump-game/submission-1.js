class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let n = nums.length;
        let maxReach = 0;
        for(let i = 0; i<nums.length; i++) {
            // kia ma maximum reachable hon
            if(i > maxReach) {
                return false;
            }
            maxReach = Math.max(maxReach, i+nums[i]);
            if(maxReach >= n-1) {
                return true;
            }
        }
        return true;
    }
}
