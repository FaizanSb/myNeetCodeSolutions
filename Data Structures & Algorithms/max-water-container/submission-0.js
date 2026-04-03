class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length -1;
        let mostWater = [];
        while(l<r) { 

            const amount = (r-l)*Math.min(heights[l],heights[r])
            mostWater.push(amount);

            if(heights[l]<heights[r]){
                l++;
            }else{
                r--;
            }
        }
        return Math.max(...mostWater);
    }
}
