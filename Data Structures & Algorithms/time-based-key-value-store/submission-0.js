class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {

        if(!this.keyStore.has(key)) {
            this.keyStore.set(key,[])
        }
        this.keyStore.get(key).push([timestamp,value])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)){
            return ''
        }
        let array = this.keyStore.get(key);
        let left = 0;
        let right = array.length-1;
        let result = ''
        while(left<=right) {
            const mid = Math.floor((left+right)/2);
            if(array[mid][0] <= timestamp) {
                result = array[mid][1];
                left = mid+1;
            }else{
                right = mid-1;
            }
        }
        return result;
    }
}
