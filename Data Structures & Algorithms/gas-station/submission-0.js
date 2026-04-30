class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        // First try using brute force
        let n = gas.length;

        for (let i = 0; i < n; i++) {
            if (gas[i] < cost[i]) continue;

            let tank = gas[i] - cost[i];
            let j = (i + 1) % n; // j next index ko track kry ga. and %2 again gool loop ka lea
            // let gasAtIndexJ = gas[i] - cost[i] + gas[j];

            while (i !== j) {
                tank+=gas[j];
                if(tank < cost[j]) {
                    break;
                }                
                tank -= cost[j]
                j = (j+1) % n;
                // gasAtIndexJ = movingNext + gas[j];
            }

            if(i === j) {
                return j;
            }
            
        }
        return -1;
    }
}
