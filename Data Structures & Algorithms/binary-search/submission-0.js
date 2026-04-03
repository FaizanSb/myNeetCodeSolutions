class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        //let sortedNums = nums.sort((a,b)=>a-b);
        let n = nums.length;

        let begning = 0;
        let end = n-1;

        while(begning <= end) {

            //const mid = Math.floor(begning + (begning+end)/2);
            const mid = Math.floor((begning+end)/2);

            if(target < nums[mid]) {
                end = mid - 1;
            }else if(target > nums[mid]) {
                begning = mid + 1;
            }else {
                return mid;
            }
        }
        return -1;
    }
}
