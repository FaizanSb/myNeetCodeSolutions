class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        let n = S.length;
        let res = [];

        let map = new Array(26).fill(-1);
        for (let i = 0; i < n; i++) {
            let idx = S[i].charCodeAt(0) - 'a'.charCodeAt(0);
            map[idx] = i;
        }
        let i = 0;
        let start = 0;
        let end = 0;
        while (i < n) {
            end = Math.max(end, map[S[i].charCodeAt(0) - "a".charCodeAt(0)]); ;
            if (i === end) {
                res.push(end - start + 1);
                start = end + 1;
            }
            i++;
        }
        return res;
    }
}
