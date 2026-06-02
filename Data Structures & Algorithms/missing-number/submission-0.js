class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
//     Full:    0 ^ 1 ^ 2 ^ 3
//     Array:         3 ^ 0 ^ 1
//     --------------------------------
//     Cancel: 0,1,3
//     Left:  2

    missingNumber(nums) {
        // Phly ham Array ka xor lay gy
        let xor = 0;
        let n = nums.length;
        // xor array elements
        for(let i = 0; i<n; i++) {
            xor ^= nums[i];
        }

        // Now xor from 1 to n
        for(let i = 1; i<=n; i++) {
            xor ^= i;
        }
        return xor;
    }
}
