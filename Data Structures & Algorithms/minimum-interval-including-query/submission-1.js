class Solution {
    minInterval(intervals, queries) {
        
        // Manual Min Heap by size
        class MinHeap {
            constructor() { this.heap = []; }
            
            push([size, end]) {
                this.heap.push([size, end]);
                this._bubbleUp(this.heap.length - 1);
            }
            
            pop() {
                const top = this.heap[0];
                const last = this.heap.pop();
                if (this.heap.length > 0) {
                    this.heap[0] = last;
                    this._sinkDown(0);
                }
                return top;
            }
            
            peek() { return this.heap[0]; }
            isEmpty() { return this.heap.length === 0; }
            
            _bubbleUp(i) {
                while (i > 0) {
                    const parent = Math.floor((i - 1) / 2);
                    if (this.heap[parent][0] > this.heap[i][0]) {
                        [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
                        i = parent;
                    } else break;
                }
            }
            
            _sinkDown(i) {
                const n = this.heap.length;
                while (true) {
                    let smallest = i;
                    const l = 2*i+1, r = 2*i+2;
                    if (l < n && this.heap[l][0] < this.heap[smallest][0]) smallest = l;
                    if (r < n && this.heap[r][0] < this.heap[smallest][0]) smallest = r;
                    if (smallest !== i) {
                        [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
                        i = smallest;
                    } else break;
                }
            }
        }

        const pq = new MinHeap();
        const res = new Array(queries.length);

        const queries_with_idx = queries.map((q, i) => [q, i]);
        queries_with_idx.sort((a, b) => a[0] - b[0]);
        intervals.sort((a, b) => a[0] - b[0]);

        let i = 0;
        for (const [query, idx] of queries_with_idx) {

            while (i < intervals.length && intervals[i][0] <= query) {
                const size = intervals[i][1] - intervals[i][0] + 1;
                pq.push([size, intervals[i][1]]);
                i++;
            }

            while (!pq.isEmpty() && pq.peek()[1] < query) {
                pq.pop();
            }

            res[idx] = pq.isEmpty() ? -1 : pq.peek()[0];
        }

        return res;
    }
}