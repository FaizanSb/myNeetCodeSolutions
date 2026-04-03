class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    constructor() {
        this.rows = 0;
        this.cols = 0;
        this.noOfIslands = 0;
    }

    dfs(grid,r,c,sharedGrid) {
        if(r<0 || r>=this.rows || c<0 || c>=this.cols || grid[r][c] === '0' || sharedGrid[r][c]) {
            return;
        }

        sharedGrid[r][c] = true;
        this.dfs(grid,r,c-1,sharedGrid) // left
        this.dfs(grid,r,c+1,sharedGrid) // right
        this.dfs(grid,r-1,c,sharedGrid) // up
        this.dfs(grid,r+1,c,sharedGrid) // down
       
    }

    numIslands(grid) {
        this.rows = grid.length;
        this.cols = grid[0].length;
        // const sharedGrid = new Array(this.rows).fill(new Array(this.cols).fill(false));
        const sharedGrid = Array.from({ length: this.rows }, () =>
            Array(this.cols).fill(false)
        );
        for(let i = 0; i<this.rows;i++) {
            for(let j =0; j<this.cols; j++) {
               if(!sharedGrid[i][j] && grid[i][j] === '1') {
                    this.dfs(grid,i,j,sharedGrid);
                    this.noOfIslands++;
               }
               
            }
        }
        return this.noOfIslands;
    }
}
