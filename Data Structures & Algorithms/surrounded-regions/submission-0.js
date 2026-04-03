class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    DFS(row,col,board,rows,cols) {
        let dirs = [[1,0],[0,1],[0,-1],[-1,0]];

        if(row < 0 || row >=rows || col < 0 || col >= cols) {
            return;
        }
        if(board[row][col] === "S" || board[row][col] === "X") {
            return;
        }
        board[row][col] = "S";

        for(let [dr,dc] of dirs) {
            let new_row = row + dr;
            let new_col = col + dc

            this.DFS(new_row,new_col,board,rows,cols)
        }

    }

    solve(board) {
        let rows = board.length;
        let cols = board[0].length;

        // Ab ma first and last row ko traverse kron ga
        for(let j=0; j<cols; j++) {
            this.DFS(0,j,board,rows,cols);
            this.DFS(rows-1,j,board,rows,cols);
        }

        // Ab ma first and last column traverse kron ga
        for(let i=0; i<rows; i++) {
            this.DFS(i,0,board,rows,cols);
            this.DFS(i,cols-1,board,rows,cols);
            
        }
        // Ab ma traverse kr lon ga sary grid ko and check kr lon ga agr koi 0 bacha to usy 'x' bna don ga
        for(let i = 0; i<rows; i++) {
            for(let j=0; j<cols; j++) {
                if(board[i][j] === "O") {
                    board[i][j] = "X";
                }
                if(board[i][j] === "S") {
                    board[i][j] = "O";
                }
            }
        }
        return board;
    }
}
