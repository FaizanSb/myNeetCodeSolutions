/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        // sort in ascending order
        if(intervals.length === 0 || intervals.length === 1) return true;
        intervals.sort((a, b) => a.start - b.start);

        let prev = intervals[0].end;

        for (let i = 1; i < intervals.length; i++) {
            if (prev > intervals[i].start) {
                return false;
            } 
            prev = intervals[i].end;
        }
        
        return true;
    }
}
