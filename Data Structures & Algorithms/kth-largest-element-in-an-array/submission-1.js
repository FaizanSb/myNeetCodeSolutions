class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let minHeap = new MinPriorityQueue();

        for(let n of nums) {
            minHeap.enqueue(n);
            if(minHeap.size() > k) {
                minHeap.dequeue();
            }
        }
        return minHeap.front();
    }
}
