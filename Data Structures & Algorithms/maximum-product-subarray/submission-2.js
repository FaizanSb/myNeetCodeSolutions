class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let minProduct = nums[0];
        let maxProduct = nums[0];
        let result = nums[0];

        for(let i = 1; i<nums.length; i++) {
            let curr = nums[i];

            if(curr < 0) {
                // swap kr len gay taky calculation thk ho
                [maxProduct,minProduct] = [minProduct,maxProduct];
            }
            maxProduct = Math.max(curr,maxProduct*curr);
            minProduct = Math.min(curr,minProduct*curr);

            result = Math.max(result,maxProduct);
        }
        return result;
    }
}
