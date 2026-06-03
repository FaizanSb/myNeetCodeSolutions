class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        const MIN_VAL = -2147483648;
        const MAX_VAL = 2147483647;

        let sign = x < 0 ? -1 : 1;
        x = Math.abs(x);
        let rev = 0; // intialize rev to 0;

        while (x > 0) {
            // Find the last digit
            let last_digit = x % 10;

            // reverse the number
            rev = rev * 10 + last_digit;
            // remove last number
            x = Math.trunc(x / 10);
        }

        rev *= sign;

        // check overflow condition
        if (rev <= MIN_VAL || rev >= MAX_VAL) {
            return 0;
        }
        return rev;
    }
}
