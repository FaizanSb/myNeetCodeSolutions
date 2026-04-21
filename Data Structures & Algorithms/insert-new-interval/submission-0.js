class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let result = [];
        let i = 0;
        // Left side waly interval ko push kry agr current ka end less ho new ky start sa
        while(i < intervals.length && intervals[i][1] < newInterval[0]) {
            result.push(intervals[i]);
            i++;
        }
        // agr overlapping ho
        while(i < intervals.length && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(intervals[i][0],newInterval[0]);
            newInterval[1] = Math.max(intervals[i][1],newInterval[1]);
            i++;
        }
        result.push(newInterval);

        // right side wali value be result ma dalo
        while(i<intervals.length) {
            result.push(intervals[i]);
            i++;
        }
        return result;
    }
}
