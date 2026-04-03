class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let min  = 0;
        let max = Math.max(...piles);

        while (min < max) {
            const mid = Math.floor((min+max)/2);

            if(this.checkHours(piles,mid,h)){
                max = mid;
            }else{
                min = mid+1;
            }
        }
        return min;
    }

    checkHours(piles,mid,givenHours) {
        let actualHours = 0;
        for(let p of piles) {
            actualHours = actualHours + Math.ceil(p/mid);

        }
        
        return givenHours < actualHours ? false : true;
    }
}
