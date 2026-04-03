class Solution {
    constructor() {
        this.res = [];
        this.temp = [];
        this.open = 0;
        this.close = 0;
    }

    /**
     * @param {number} n
     * @return {string[]}
     */
    solve(n) {

        if(this.temp.length === 2*n) {
            this.res.push(this.temp.join(''));
            return;
        }
        if(this.open < n) {
            this.temp.push('(');
            this.open++;
            this.solve(n);
            this.temp.pop();
            this.open--;
        }
        if(this.close < this.open) {
            this.temp.push(')');
            this.close++;
            this.solve(n);
            this.temp.pop();
            this.close--;
        }
    }
    generateParenthesis(n) {
        this.solve(n);
        return this.res;
    }
}
