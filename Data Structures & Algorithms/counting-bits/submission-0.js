class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let bits = new Array(n+1).fill(0);

        for(let i = 1; i<=n; i++) {
            bits[i] = bits[i & (i-1)] +1;
        }
        return bits;
    }
}
