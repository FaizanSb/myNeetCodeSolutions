class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        let res = [0,0,0];

        for(let t of triplets) {
            if(t[0] > target[0] || t[1] > target[1] || t[2] > target[2]) {
                continue;
            }

            res[0] = Math.max(res[0],t[0]);
            res[1] = Math.max(res[1],t[1]);
            res[2] = Math.max(res[2],t[2]);
        }

        return (
            res[0] === target[0] && res[1] === target[1] && res[2] === target[2]
        )
    }
}
