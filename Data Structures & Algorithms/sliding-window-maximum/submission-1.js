class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let deque = [];
        let maxCount = [];

        for(let i=0;i<nums.length;i++) {

           
            // Step 1 Check kry ga ka kia front wala element os window ky ander ata ha. agr nhi ata to nikal dy ga deque sa
            while(deque.length!=0 && deque[0] <= i-k) {
                deque.shift();
            }

            //Step 2 check kry ga ka kia new element ki value zada to nhi ha front of deque waly element sa. Agr zada ha to wha sa nikal dy ga
            while(deque.length!=0 && nums[i] > nums[deque[deque.length-1]]) {
                deque.pop();
            }

             // Simple deque ma push kry ga
            deque.push(i);

            // step 3 check kry da ka kia value window ky sary elements dakhny ky bad he maxCount ma jay gi
            if(i>=k-1) {
                maxCount.push(nums[deque[0]])
            }
        
           
        }
        return maxCount;
    }
}
