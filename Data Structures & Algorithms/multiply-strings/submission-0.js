class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) {
        let n = num1.length;
        let m = num2.length;

        let positions = new Array(m + n).fill(0);
        for (let i = n - 1; i >= 0; i--) {
            for (let j = m - 1; j >= 0; j--) {
                let mul = (num1[i] - '0') * (num2[j] - '0');
                let p1 = i + j; // to store carry
                let p2 = i + j + 1; // to store result
                const sum = mul + positions[p2]; // sum ki overall value

                positions[p2] = sum % 10; // for creating vlaue
                positions[p1] += Math.floor(sum / 10); // for creating carry
            }
        }
        const result = positions.join("").replace(/^0+/, "");
        return result || '0';
    }
}
