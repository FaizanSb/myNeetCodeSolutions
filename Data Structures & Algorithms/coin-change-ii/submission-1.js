class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    constructor() {
        this.memo = Array.from({length:101},()=>Array(5001).fill(-1));
    }
    change(amount, coins) {
        let n = coins.length;
       return this.solve(coins,amount,0,n);
    }
    solve(coins,amount,i,n) {
        if(this.memo[i][amount] !== -1) {
            return this.memo[i][amount];
        } 
        if(i === n) {
            return 0;
        }
        if(amount === 0) {
            return 1;
        }
        if(amount < coins[i]) {
            return this.solve(coins,amount,i+1,n);
        }
        let take = this.solve(coins,amount-coins[i],i,n);
        let skip = this.solve(coins,amount,i+1,n);
        return this.memo[i][amount] = take+skip;
    }
}
