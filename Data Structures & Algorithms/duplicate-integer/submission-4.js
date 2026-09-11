class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hashMap = new Set();

        for(let i=0; i<nums.length; i++) {
            if(hashMap.has(nums[i])) {
                return true;
            }else{
                hashMap.add(nums[i]);
            }
        }
        return false;
    }
}
