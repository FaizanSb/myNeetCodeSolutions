class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if(intervals.length === 0) {
            return [];
        }
        intervals.sort((a,b)=>a[0] - b[0]);

        let res = [];
        let curr = intervals[0];

        for(let i =1; i<intervals.length; i++) {
            // Check if overlap
            if(curr[1] >= intervals[i][0]) {
                // let leftInter = Math.min(curr[0],intervals[i][0]);
                // let rightInter = Math.max(curr[1],intervals[i][1]);
                curr[1] = Math.max(curr[1],intervals[i][1]);
            }else{
                res.push(curr);
                curr = intervals[i];         
            }
        }
        res.push(curr);
        return res;
    }
}
