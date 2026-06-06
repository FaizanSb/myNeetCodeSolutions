class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let rows = matrix.length;
        let cols = matrix[0].length;

        let temp = matrix.map(row=>[...row]);

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (matrix[i][j] === 0) {
                    // first change specific row in which 0 exists
                    for (let k = 0; k < cols; k++) {
                        temp[i][k] = 0;
                    }
                    // then change specific column in which 0 exists
                    for (let k = 0; k < rows; k++) {
                        temp[k][j] = 0;
                    }
                }
            }
        }
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                matrix[i][j] = temp[i][j];
            }
        }
        return matrix;
    }
}
