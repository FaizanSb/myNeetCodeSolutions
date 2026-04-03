class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    constructor() {
        this.res = [];
        this.n = 0;
    }

    solve(idx,nums) {
        
        if(idx === nums.length) {
            this.res.push([...nums]);
            return;
        }
        for(let i = idx; i < nums.length; i++) {
            let temp = nums[idx];
            nums[idx] = nums[i];
            nums[i] = temp;

            this.solve(idx+1,nums)

            temp = nums[idx];
            nums[idx] = nums[i];
            nums[i] = temp;
        }
    }
    permute(nums) {
        // console.log(nums,typeof nums)
        this.res = []
        this.n = nums.length;
        this.solve(0,nums);
        return this.res;
    }
}
