class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        let left = 0;
        let right = nums.length-1;
        let pivot = this.findPivot(nums);

        let idx = this.findIdx(left,pivot-1,target,nums)
        if(idx != -1) {
            return idx;
        }

        idx = this.findIdx(pivot,right,target,nums);

        return idx;

    }

    findPivot(nums) {

        let left = 0;
        let right = nums.length-1;

        while (left < right) {
            const mid = Math.floor((left+right)/2)

            if(nums[mid] > nums[right]) {
                left = mid+1;
            }else {
                right = mid;
            }
        }
        return right;
    }

    findIdx(left,right,target,nums) {
        
        while (left <= right) {
            const mid = Math.floor((left+right)/2);

            if(nums[mid]===target) {
                return mid;
            }

            if(target > nums[mid]) {
                left = mid+1;
            }else {
                right = mid-1;
            }
        }
        return -1;
    }

}
 