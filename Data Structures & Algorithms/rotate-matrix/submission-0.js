class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        let rows = matrix.length;
        let cols = matrix[0].length;
        let result = Array.from({ length: cols }, () => Array(rows).fill(0));

        // taking transpose
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                result[i][j] = matrix[j][i]; // swap the numbers
            }
        }
        //console.log("transope is ",result)

        for (let i = 0; i < rows; i++) {
            let rev = result[i].reverse();

            matrix[i] = rev;
            //console.log("Value of reverse is ",rev);
        }
        return matrix;
    }
}
