class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    constructor() {
        this.row = 0;
        this.col = 0;
    }
    find(board,word,idx,i,j) {
        let dirs = [[1,0],[-1,0],[0,1],[0,-1]]; // Direction to move up,down,left and right

        if(idx === word.length) {
            return true;
        }

        if(i < 0 || i >= this.row || j < 0 || j >= this.col) {
            return false;
        }

        if(board[i][j] === "$") {
            return false;
        }

        if(board[i][j] !== word[idx]){
            return false;
        }

        let temp = board[i][j];
        board[i][j] ="$"; // Mark as a visited

        for(let [dr,dc] of dirs) {
            let newRow = dr+i;
            let newCol = dc+j;
            if(this.find(board,word,idx+1,newRow,newCol)) {
                return true;
            }
        }
        board[i][j] = temp;
        return false;        
    }
    exist(board, word) {
        this.row = board.length;
        this.col = board[0].length;
        let idx = 0 // For moving word index by index
        for(let i = 0; i<this.row;i++) {
            for(let j=0;j<this.col;j++) {
                if(word[0]===board[i][j]) {
                    if(this.find(board,word,idx,i,j)){
                        return true;
                    }
                }
            }
        }
        return false;
        
    }
}
