class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
    let multiplier = 1;
    let multiplierArr = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i != j) {
                multiplier = multiplier * nums[j];
                
            }

        }
        multiplierArr.push(multiplier);
        multiplier = 1;
    }

    return multiplierArr;
}
}
