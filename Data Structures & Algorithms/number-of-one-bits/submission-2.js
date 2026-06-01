class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let count = 0;
        for (let i = 31; i >= 0; i--) {
            if ((n >> i) & (1 === 1)) {
                count++;
            }
        }
        return count;
    }
}
