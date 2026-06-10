class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let n = digits.length;

        for(let i=n-1; i>=0; i--) {
            if(digits[i] < 9) {
                digits[i] += 1;
                return digits;
            }
            digits[i] = 0;
        }
        // agr sara array ky bad be carry aa rha ha to simple start ma one add kro
        digits.unshift(1);
        return digits;
    }
}
