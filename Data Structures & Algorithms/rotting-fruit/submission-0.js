class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {

        let rows = grid.length;
        let cols = grid[0].length;
        let ans = 0;
        let que = [];
        let time = 0;
        let isVisit = Array.from({ length: rows }, () => Array(cols).fill(false));

        // Phly sary rotted fruits ko que ma daly gy
        for(let i = 0; i<rows; i++) {
            for(let j =0; j<cols; j++) {
                if(grid[i][j] === 2) {
                    que.push([i,j,0]);
                    isVisit[i][j] = true;
                }
            }
        }

        // Ab BFS apply kren gy and check kr lay gy
        while(que.length !== 0) {
            let [i,j,time] = que.shift();
            ans = Math.max(ans,time);

            // Top visit kry ga
            if(i-1 >= 0 && !isVisit[i-1][j]  && grid[i-1][j] === 1) {
                que.push([i-1,j,time+1]);
                isVisit[i-1][j] = true;
            }
            // Bottom visit kry ga
            if(i+1 < rows && !isVisit[i+1][j]  && grid[i+1][j] ===1) {
                que.push([i+1,j,time+1]);
                isVisit[i+1][j] = true;
            }
            
            // Right visit kry ga

            if(j+1 < cols && !isVisit[i][j+1]  && grid[i][j+1] ===1) {
                que.push([i,j+1,time+1]);
                isVisit[i][j+1] = true;
            }
            
            // Left visit kry ga
            if(j-1 >= 0 && !isVisit[i][j-1]  && grid[i][j-1] ===1) {
                que.push([i,j-1,time+1]);
                isVisit[i][j-1] = true;
            }
        }

        // Agr visit krny ky bad be kuch bach jata ha to ham return false kr day gy
        for(let i = 0; i<rows; i++) {
            for(let j =0; j<cols; j++) {
                if(grid[i][j] === 1 && !isVisit[i][j] ) {
                    return -1;
                }
            }
        }

        return ans;
    }
}
