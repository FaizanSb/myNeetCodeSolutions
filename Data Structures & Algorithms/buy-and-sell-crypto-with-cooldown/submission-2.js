class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    constructor() {
        this.memo = Array.from({ length: 5001 }, () => Array(2).fill(-1));
    }
    maxProfit(prices) {
        let n = prices.length;

        this.memo = Array.from({ length: n }, () => Array(2).fill(-1));
        return this.solve(0, prices, n, true);
    }
    solve(day, prices, n, buy) {
        if (day >= n) {
            return 0;
        }
        if (this.memo[day][buy ? 1 : 0] !== -1) {
            return this.memo[day][buy ? 1 : 0];
        }

        let profit = 0;
        // agr tum buy kr skty ho
        if (buy) {
            // agr buy krty hn to us sa next sell krna pry
            // ga and us din ki price ko minus krna hoga
            let buy_token = this.solve(day + 1, prices, n, false) - prices[day];
            // Agr aj buy nhi krta to kal usy again buy he krna hoga
            let not_buy_token = this.solve(day + 1, prices, n, true);

            profit = Math.max(profit, buy_token, not_buy_token);
        } else {
            // agr aj sell kr day to cool down kay bad wo buy kr sky ga and current day ka profit add ho jay ga
            let sell = this.solve(day + 2, prices, n, true) + prices[day];

            // Agr aj sell nhi krta to us sa next day ko usy sell krna pry ga
            let not_sell = this.solve(day + 1, prices, n, false);

            profit = Math.max(profit, sell, not_sell);
        }
        return (this.memo[day][buy ? 1 : 0] = profit);
    }
}
