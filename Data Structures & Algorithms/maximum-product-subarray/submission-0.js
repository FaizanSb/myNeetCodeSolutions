class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let product = -Infinity;

        for(let s = 0; s<nums.length; s++) {
            let currPro = 1;
            for(let e = s; e<nums.length; e++) {
                currPro = currPro * nums[e];
                product = Math.max(currPro,product);
            }
        }
        return product;
    }
}
