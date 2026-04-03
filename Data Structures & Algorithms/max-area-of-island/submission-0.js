class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    constructor() {
        this.rows = 0;
        this.cols = 0;
        this.cArea = 0; // Current Area
        this.area = 0; // Final Area
    }
    dfs(grid,r,c,sharedGrid) {

        if(r<0 || r >= this.rows || c < 0 || c >=this.cols || grid[r][c] === 0 || sharedGrid[r][c]) {
            return;
        }

        sharedGrid[r][c] = true;
        this.cArea++;

        this.dfs(grid,r+1,c,sharedGrid);
        this.dfs(grid,r-1,c,sharedGrid);
        this.dfs(grid,r,c-1,sharedGrid);
        this.dfs(grid,r,c+1,sharedGrid);       
        

    }

    maxAreaOfIsland(grid) {
        this.rows = grid.length;
        this.cols = grid[0].length;
        const sharedGrid = Array.from({length: this.rows}, () =>
            Array(this.cols).fill(false)
        );

        for(let i = 0; i<this.rows; i++) {
            for(let j = 0; j<this.cols; j++) {

                if(!sharedGrid[i][j] && grid[i][j] === 1) {
                    this.dfs(grid,i,j,sharedGrid);
                    this.area = Math.max(this.cArea,this.area);
                    this.cArea = 0;
                }
            }
        }
        return this.area;
    }
}
