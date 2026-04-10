class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // intutuion ye ha ka 
        //ham ak array bna len gy jis ma stolen amount ko store kry gy and uska size N+1 kry gy
        // because 0 gar ka profit 0 ho ga and ham us ko store kry gy. then 1th gar ka profit i-1 th ho ga
        let n = nums.length;
        let robberAmount = new Array(n+1).fill(0);

        robberAmount[0] = 0;
        robberAmount[1] = nums[0];

        for(let i = 2; i<=n ; i++) {
            let take = nums[i-1] + robberAmount[i-2]; // Nums array ka house ka profit + previous sa previous gar ka profit

            let skip = robberAmount[i-1]; // agr skip kea to jo previous gar ka prfits ha wo choose kry gy

            robberAmount[i] = Math.max(take,skip); // Current house ky profit ma maximum value daly gy
        }
        return robberAmount[n];
    }
}
