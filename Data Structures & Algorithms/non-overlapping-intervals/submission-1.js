class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        let count = 0;
        intervals.sort((a,b)=>a[1] - b[1]);
        //let currInterval = intervals[0];
        let end = intervals[0][1];
        for(let i = 1; i<intervals.length; i++) {
            if(end > intervals[i][0]) {
                count++;
                
            }else {
                end = intervals[i][1];
                // count++;
            }
            
        }
        return count;   
    }
}
