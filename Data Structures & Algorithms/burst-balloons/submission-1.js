class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    maxCoins(nums) {
        let memo = new Map();
        return this.maxProfit(nums, memo);
    }
    maxProfit(nums, memo) {
        let n = nums.length;
        if (n === 0) return 0; // Agr koi ballon nhi to 0 coins return kro
        if (n === 1) return nums[0]; // Agr ak ballon ho to uski value return kry gy

        let key = nums.join(",");

        if (memo.has(key)) {
            return memo.get(key);
        }
        // Total coins dakhy gy kitny collect huy
        let maxCoinsFound = 0;

        // Idr ham sary coins ko calaculate kry gy
        for (let i = 0; i < n; i++) {
            const left = i > 0 ? nums[i - 1] : 1; // Kia left ma koi value nhi ? if yes then 1
            const right = i < n - 1 ? nums[i + 1] : 1; // Kia right ma koi value nhi ? if yes then 1

            const coins = left * nums[i] * right; // Total coins amount
            
            const remaining = [...nums.slice(0, i), ...nums.slice(i + 1)]; // array without current value

            const total = coins + this.maxProfit(remaining, memo); // find total coins

            if (total > maxCoinsFound) {
                // Update max coins found according to total
                maxCoinsFound = total;
            }
        }
        memo.set(key, maxCoinsFound);
        return maxCoinsFound;
    }
}
