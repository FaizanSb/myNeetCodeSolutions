class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l=0;
        let maxFreq = 0;
        let mapCount = new Map();
        let result = 0;

        for(let r=0; r<s.length; r++){
            mapCount.set(s[r], (mapCount.get(s[r]) || 0) + 1);
            maxFreq = Math.max(maxFreq,mapCount.get(s[r]));
            let windowSize = r - l + 1;

            if(windowSize-maxFreq > k){
                mapCount.set(s[l],mapCount.get(s[l])-1);
                l++;
            }

            result = Math.max(result,r-l+1);
        }
        return result
    }
}
