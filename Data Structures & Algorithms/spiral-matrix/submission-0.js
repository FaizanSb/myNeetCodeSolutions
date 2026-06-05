class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        let left = 0; 
        let right = matrix[0].length - 1;
        let top = 0;
        let bottom = matrix.length -1;

        let res = [];

        // traverse kry gy jab tak left >= to right na ho jay and top >= bottom ho jay
        while(left <= right && top <= bottom) {
            // left sa rigth, top same
            for(let i=left; i<=right; i++) {
                res.push(matrix[top][i]);
            }
            top++; // then top ko next layer pay move krway gy
            // ab top to bottom, right same, 

            for(let i=top; i<=bottom; i++) {
                res.push(matrix[i][right]);
            }
            right--;

            // right to left, bottom same
            if(top <= bottom) {
                for(let i = right; i>=left; i--) {
                    res.push(matrix[bottom][i]);
                }
                bottom--;
            }
            // bottom to top, left same
            if(left <= right) {
                for(let i=bottom; i>=top; i--) {
                    res.push(matrix[i][left]);
                }
                left++;
            }
        }
        return res;
    }
}
