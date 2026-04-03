class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let maxHeap = new MaxPriorityQueue();
        let res = null;
        for(let n of nums) {
            maxHeap.enqueue(n);
        }
        for(let i = 0; i<k;i++) {
            res = maxHeap.dequeue();
        }

        return res;
    }
}
