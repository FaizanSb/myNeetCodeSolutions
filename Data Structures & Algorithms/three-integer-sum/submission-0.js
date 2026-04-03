class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(arr) {
        let sortedArr = arr.sort((a, b) => a - b);
    let sum = 0;
    let setofTriplets = new Set();

    for (let i = 0; i < sortedArr.length - 2; i++) {
        let left = i + 1;
        let right = sortedArr.length - 1;
        while (left < right) {
            sum = sortedArr[i] + sortedArr[left] + sortedArr[right];
            if (sum === 0) {
                setofTriplets.add([sortedArr[i], sortedArr[left], sortedArr[right]].toString());
                left++;
                right--;
              
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
      return Array.from(setofTriplets).map(triplet => triplet.split(',').map(Number));
    }
}
