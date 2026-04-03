class MedianFinder {
    /* Intutuion kuch ye ha
        right ky sary elements ki value left ky elements sa zada hony chyea
        left ka size >= hona chyea right side sa
        agr right ka size > ho jay left sa to right sa minimum nikal ka left ma dal do


    */
    constructor() {
        this.maxHeap = new MaxPriorityQueue(); // Left side ka lea
        this.minHeap = new MinPriorityQueue(); // Right side ka lea

    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        // Jo bhi element aye ga firstly ham us ko max Heap ma daly gy
        this.maxHeap.enqueue(num);
        // fir ham dakhy gy ka kia left ka elements right sa kam hn ?
        if(this.minHeap.size()>0 && this.maxHeap.front() > this.minHeap.front()) {
            this.minHeap.enqueue(this.maxHeap.dequeue());
        }
        // agr left ka size greater ho jay right ka size + 1 ky then 
        if(this.maxHeap.size() > this.minHeap.size()+1) {
            this.minHeap.enqueue(this.maxHeap.dequeue());
        }

        // Agr right ka size zada ho jay left sa to ma right ka top element left ma dalo ga
        if(this.minHeap.size() > this.maxHeap.size()) {
            this.maxHeap.enqueue(this.minHeap.dequeue());
        }

    }

    /**
     * @return {number}
     */
    findMedian() {
        if(this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.front();
        }
        return (this.maxHeap.front()+this.minHeap.front()) /2;
        
    }
}
