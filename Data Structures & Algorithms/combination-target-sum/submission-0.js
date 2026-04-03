class Solution {
    constructor() {
        this.result = []
        this.current = []
    }
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    solve(nums,target,idx) {
        if(target < 0) {
            return;
        }

        if(target === 0) {
            this.result.push([...this.current]);
            return;
        }
        
        for(let i = idx; i < nums.length; i++) {
            if(i>idx && nums[i] === nums[i-1]) {
                continue;
            }
            this.current.push(nums[i])
            this.solve(nums,target-nums[i],i);
            this.current.pop();
        }
    }
    combinationSum(nums, target) {
        
        this.solve(nums,target,0);
        return this.result;
    }
}
