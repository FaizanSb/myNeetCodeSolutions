class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let inf = 2147483647;
        let que = [];
        // Phly ham sary treasures ko que ma dal day gy
        for(let i = 0; i<rows;i++) {
            for(let j= 0; j<cols; j++) {
                if(grid[i][j] === 0) {
                    que.push([i,j]);
                }
            }
        }
        console.log("queue is",que);
        // Ab ham direction ko set kry gy and one by one move kry gy
        let directions = [[1,0],[0,1],[0,-1],[-1,0]];
        let i = 0;
        while(i<que.length) {
            const [r,c] = que[i];
            
            i++;
        

            for(let [dr,dc] of directions) {
                let neigRow = r+dr;
                let neigCol = c+dc;
                if(neigRow < 0 || neigRow >= rows || neigCol < 0 || neigCol >= cols) continue;
                if(grid[neigRow][neigCol] !== inf) {
                    continue;
                }
                grid[neigRow][neigCol] = grid[r][c] + 1;
                que.push([neigRow,neigCol]);

            }
        }
            return grid;
    }   
}
