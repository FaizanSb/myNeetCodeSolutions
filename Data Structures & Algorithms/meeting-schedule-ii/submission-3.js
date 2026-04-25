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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let newArr = [];
        for (let i = 0; i < intervals.length; i++) {
            newArr.push([intervals[i].start, 1]);
        }
        for (let i = 0; i < intervals.length; i++) {
            newArr.push([intervals[i].end, -1]);
        }
        // agr new metting ka start and ending time same ho to phly end waly ko minus kry gy then phly waly ko
        newArr.sort((a, b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1];
            }
            return a[0] - b[0];
        });
        //console.log(newArr);
        let overlap = 0;
        let Max_OverLap = 0;
        for (let i = 0; i < newArr.length; i++) {
            overlap += newArr[i][1];
            Max_OverLap = Math.max(overlap, Max_OverLap);
        }
        return Max_OverLap;
    }
}
