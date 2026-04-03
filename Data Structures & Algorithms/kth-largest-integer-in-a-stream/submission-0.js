class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        // Elements ko phli dafa insert kea lea 
        this.minHeap = new MinPriorityQueue();
        this.findK = k;
        // /values insert kry gy
        for(let num of nums) {
            this.minHeap.enqueue(num);
        }

        // Size maintain krny ka lea e.g k = 4
        while(this.minHeap.size() > this.findK) {
            this.minHeap.dequeue();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.enqueue(val);
        
        while(this.minHeap.size() > this.findK) {
            this.minHeap.dequeue();
        }
        return this.minHeap.front();
    }
}
