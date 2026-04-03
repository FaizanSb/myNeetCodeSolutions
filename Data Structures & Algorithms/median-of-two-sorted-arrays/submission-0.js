class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const newArr = [];
        newArr.push(...nums1,...nums2);
        const sArr = newArr.sort((a,b)=>a-b)
        
        let l = 0;
        let r = sArr.length-1;
        const lengthA = sArr.length;
        const mid = Math.floor((l+r)/2);
        let median = null;
        if(lengthA%2===0) {
            
            median =(sArr[mid]+sArr[mid+1])/2;
            return Math.round(median*10)/10;
        }
        return sArr[mid];
    }
}
