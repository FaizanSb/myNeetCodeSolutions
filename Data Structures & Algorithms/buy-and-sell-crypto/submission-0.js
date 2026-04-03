class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r= l+1;
        let maxProfit = 0;
        while(r<prices.length){

            if(prices[l]<prices[r]){
                const profit = prices[r]-prices[l];
                maxProfit = Math.max(profit,maxProfit)   
            }else{
                l=r;
            }                
            
            r++;
          
        }

        return maxProfit
    }
}
