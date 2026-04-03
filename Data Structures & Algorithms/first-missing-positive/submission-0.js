class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let sortedArr = nums.sort((a,b)=>a-b);
        let missing = 1;
        for(let n of nums){
            if(n>0 && n===missing){
                missing++;
            }
        }
        return missing
    }
        
}
