class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    // constructor() {
    //     this.rows = 0;
    //     this.cols = 0;
    //     this.res = [];
    //     this.prev = -Infinity;

    // }
    pacificAtlantic(heights) {
        let rows = heights.length;
        let cols = heights[0].length;
        let res = [];
        let prev = -Infinity;

         // Pasific Ocean ka lea ak array bnay gy jis ma dakhy gay ka kia water pasific ocean ma jay ga.
        let pasificVisited = Array.from({length:rows},()=>Array(cols).fill(false));

        // Atlentic Ocean ka lea ak array bnay gy jis ma dakhy gay ka kia water atlentic ocean ma jay ga.
        let atlenticVisited = Array.from({length:rows},()=>Array(cols).fill(false));

        
        // Ab ham top row and bottom row ko visited mark kr day gy
        for(let j=0; j<cols;j++) {
            this.DFS(0,j,heights,pasificVisited,rows,cols,prev);
            this.DFS(rows-1,j,heights,atlenticVisited,rows,cols,prev);
        }

        // Ab ham left col and right col ko visited mark kr day gy
        for(let i=0; i<rows;i++) {
            this.DFS(i,0,heights,pasificVisited,rows,cols,prev);
            this.DFS(i,cols-1,heights,atlenticVisited,rows,cols,prev);
        }
        // Ab ham compare kar lay gy and same values ko result ma push kar day gy
        for(let i= 0; i<rows; i++) {
            for(let j=0; j<cols; j++) {
                if(pasificVisited[i][j] && atlenticVisited[i][j]) {
                    res.push([i,j]);
                }
            }
        }

        return res;

    }

    DFS(row,col,heights,checkVisited,rows,cols,prev) {
        let dirs = [[1,0],[0,1],[-1,0],[0,-1]];

        if(row < 0 || row >= rows || col < 0 || col >= cols) {
            return;
        }
        if(heights[row][col] < prev || checkVisited[row][col]) {
            return;
        }
        prev = heights[row][col];
        checkVisited[row][col] = true;

        for(let [dr,dc] of dirs) {
            let newRow = row+dr;
            let newCol = col+dc;

            this.DFS(newRow,newCol,heights,checkVisited,rows,cols,heights[row][col]);
        }
        
    }
}
