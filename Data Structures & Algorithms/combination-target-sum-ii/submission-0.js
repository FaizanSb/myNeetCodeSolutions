class Solution {
    constructor() {
        this.result = [];
        this.curr = [];
    }
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    solve(arr,t,idx) {
        if(t < 0) {
            return;
        }
        if(t === 0) {
            this.result.push([...this.curr]);
            return;
        }
        for(let i = idx; i<arr.length; i++) {
            if(i>idx && arr[i-1] === arr[i]) {
                continue;
            }
            this.curr.push(arr[i]);
            this.solve(arr,t-arr[i],i+1);
            this.curr.pop();
        }
    }
    combinationSum2(candidates, target) {
        let sortedCandidates = candidates.sort((a,b)=>a-b);
        this.solve(sortedCandidates,target,0);
        return this.result;
    }
}
