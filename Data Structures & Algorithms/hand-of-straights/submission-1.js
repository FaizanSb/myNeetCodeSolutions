class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        let n = hand.length;
        if(n%groupSize !== 0) return false;

        let fqMap = new Map();
        
        for(let e of hand) {
            fqMap.set(e,(fqMap.get(e) || 0) +1); 
        }

        while(fqMap.size !== 0) {
             let curr = Math.min(...fqMap.keys())

            for(let i = 0; i<groupSize; i++) {
                let card = curr+i;
                if(!fqMap.has(card)) {
                    return false;
                }

                let newVal = fqMap.get(card) -1;
                if(newVal === 0) {
                    fqMap.delete(card);
                }else {
                    fqMap.set(card,newVal)
                }

            }
        }
        return true;
    }
}
