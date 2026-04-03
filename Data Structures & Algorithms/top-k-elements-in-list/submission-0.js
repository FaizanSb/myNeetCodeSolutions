class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let nMap = new Map();

        for(let n of nums) {
            nMap.set(n,(nMap.get(n)||0)+1)
        }
        
        let mapEntries = Array.from(nMap.entries())
        mapEntries.sort((a,b)=>b[1]-a[1]); // Sort in decreasing order
        const kElem = mapEntries.slice(0,k)
       
        return kElem.map(entery=>entery[0]);
    }
}
