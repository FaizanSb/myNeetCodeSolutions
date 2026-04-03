class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
     constructor() {
            this.result = [];
            this.temp = [];
        }
    subsets(nums) {
       
        this.findSubSet(nums,0,this.temp)
        return this.result;
    }

    findSubSet(nums,i,temp) {
        if(i>=nums.length) {
            this.result.push([...this.temp]);
            return;
        }
        this.temp.push(nums[i]); // Include ith element
        this.findSubSet(nums,i+1,this.temp) // Further Explore
        this.temp.pop(); // Exclude ith element
        this.findSubSet(nums,i+1,this.temp) // Further Explore

    }
    
}
