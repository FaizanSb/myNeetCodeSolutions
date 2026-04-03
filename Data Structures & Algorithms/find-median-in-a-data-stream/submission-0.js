class MedianFinder {
    constructor() {
        this.medianArr = [];
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.medianArr.push(num);
        this.medianArr.sort((a,b)=>a-b);
    }

    /**
     * @return {number}
     */
    findMedian() {
        let l = 0;
        let r = this.medianArr.length-1;
        let mid = Math.floor((l+r)/2);
    
        if(this.medianArr.length % 2 === 0) {
            const median = (this.medianArr[mid]+this.medianArr[mid+1])/2;
            return median;
        }else {
            return Math.round(this.medianArr[mid]);
        }
    }
}
