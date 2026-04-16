class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let n = coins.length;

        let ans = this.solve(0,n,coins,amount);
        return ans === Infinity ? -1 : ans;
    }
    solve(i,n,coins,amount) {
        // Agr amount 0 ho jay to one way mill gea
        if(amount === 0) {
            return 0;
        }

        if(i === n) {
            return Infinity;
        }

        // agr coin ki value amount sa zada ho jay
        if(coins[i] > amount) {
           return this.solve(i+1,n,coins,amount);
        //    return ans === Infinity ? -1 : ans // Simple us ko skip kr dena ha
        }

        // Idr ham dakhy gy ka skip and take sa jo answer aye ga ham usy choose kry ga
        let take = 1+ this.solve(i,n,coins,amount-coins[i]);
        let skip = this.solve(i+1,n,coins,amount);

        return Math.min(take,skip);
    }
}
