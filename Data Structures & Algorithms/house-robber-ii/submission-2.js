class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // agr ma memoization use kron 
    constructor() {
        this.memo = new Array(101).fill(-1);
    }
    rob(nums) {
        let n = nums.length;
        if(n === 1) {
            return nums[0];
        }
        // Take 0th index or first house then we take n-2 index because n-1 is last house
        let first_house = this.houseRob(nums,0,n-2);

        // Take 1th index or first house then we take n-1 index because n-1 is last house
        this.memo = new Array(101).fill(-1);
        let second_house = this.houseRob(nums,1,n-1);

        return Math.max(first_house,second_house)

    }
    houseRob(nums,start,end) {
        // we take start > end because we pass valid index in function not length of array
        if(start > end) {
            return 0 
        }
        if(this.memo[start] !== -1) {
            return this.memo[start];
        }
        let take = nums[start] + this.houseRob(nums,start+2,end);
        let skip = this.houseRob(nums,start+1,end);

        return this.memo[start] = Math.max(take,skip);
    }
}
