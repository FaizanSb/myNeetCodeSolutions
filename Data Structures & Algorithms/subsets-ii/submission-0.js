class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    constructor() {
        this.res = [];
        this.temp = [];
    }
    find(nums,st) {
       
        this.res.push([...this.temp]);
        
        for(let i = st; i<nums.length;  i++) {
            if(nums[i]===nums[i-1] && i>st) {
                continue;
            }
            this.temp.push(nums[i]);
            this.find(nums,i+1);
            this.temp.pop();
        }        
        
    }
    subsetsWithDup(nums) {
        nums.sort((a,b)=>a-b);
        this.find(nums,0);
        return this.res;
    }
}
