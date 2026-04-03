class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
       const noOfRows = matrix.length;
       let startOfRow = 0;
       while (startOfRow < noOfRows) {

         const lastColVal = matrix[startOfRow][matrix[startOfRow].length-1];
         if(target <= lastColVal) {
            // Apply Binary Search
            let begning = 0;
            let end = matrix[startOfRow].length - 1;
            while (begning <= end) {

                const mid = Math.floor((begning+end)/2);
                if(target < matrix[startOfRow][mid]) {
                    end = mid-1;
                }else if(target > matrix[startOfRow][mid]) {
                    begning = mid+1;
                }else {
                    return true;
                }
            }
            return false;
         }
         startOfRow++;
       }
       return false;
    }
}
