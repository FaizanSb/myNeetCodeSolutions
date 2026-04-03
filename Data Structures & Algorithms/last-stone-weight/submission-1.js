class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let maxHeap = new MaxPriorityQueue();
       for(let s of stones) {
            maxHeap.enqueue(s);
       }
       if(maxHeap.size() === 1) {
            return maxHeap.dequeue();
       }

       while(maxHeap.size() !== 0) {

          if(maxHeap.size() === 1) {
            return maxHeap.dequeue();
          }
          let q1 = maxHeap.dequeue();
          let q2 = maxHeap.dequeue();
          let res = Math.abs(q1-q2);
           
          maxHeap.enqueue(res);
          

       }
    }
}
