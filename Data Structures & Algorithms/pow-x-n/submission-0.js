class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        return this.solve(x, n);
    }
    solve(x, n) {
        if (n === 0) return 1;
        //if (x === 0) return 0;

        if (n < 0) {
            return this.solve(1 / x, -n);
        }

        if (n % 2 === 0) {
            return this.solve(x*x, n / 2);
        }
       
        return x * this.solve(x*x, (n - 1) / 2);
    }
}
