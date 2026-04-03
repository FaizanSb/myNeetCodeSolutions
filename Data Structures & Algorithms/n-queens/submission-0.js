class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    constructor() {
        this.ans = [];
        
    }
    isSafe(board,row,j,n) {
        // Check by row 
        for(let i = 0; i<row; i++) {
            if(board[i][j] === 'Q') {
                return false;
            }
        }
        // Check by column

        // for(let col = j; col < n; col++) {
        //     if(board[row][col] === 'Q') {
        //         return false;
        //     }
        // }

        // Check left diagonal
        for(let i = row-1, col = j-1; i>=0 && col>=0; i--,col--) {
            if(board[i][col] === 'Q') {
                return false;
            }
        }

        // Check right diagonal
        for(let i = row-1, col = j+1; i>=0 && col<n; i--,col++) {
            if(board[i][col] === 'Q') {
                return false;
            }
        }
        return true;
    }

    nQueen(board,row,n) {
        if(row === n) {
            this.ans.push(board.map(row => row.join('')));
            return;
        }

        for(let j = 0; j<n;j++) {

            if(this.isSafe(board,row,j,n)) {

                board[row][j] = 'Q';
                this.nQueen(board,row+1,n);
                board[row][j] = '.';
            }
        }
    }
    solveNQueens(n) {
        let board = Array.from({ length:n }, () => new Array(n).fill('.'));
        this.nQueen(board,0,n);
        return this.ans;
    }
}
