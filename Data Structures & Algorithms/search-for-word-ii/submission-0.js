class treeNode {
    constructor() {
        this.children = {}
        this.isEnd = false;
        this.word = null;
    }
}
class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    constructor() {
        this.result = [];
        this.root = new treeNode();
        this.rows = 0;
        this.cols = 0;
        
    }
    insert(words) {
        
        let current = this.root;
        for(let w of words) {
            if(!current.children[w]) {
                current.children[w] = new treeNode();
            }
            current = current.children[w];
        }
        current.isEnd = true;
        current.word = words;
    }

    findTrie(board,r,c,root) {
        
        if(r < 0 || r >=this.rows || c <0 || c >= this.cols) {
            return 
        }
        let ch = board[r][c];
       if (ch === "$" || !root.children[ch]) {
            return;
        }
        root = root.children[ch];
        if(root.isEnd) {
            this.result.push(root.word);
            root.isEnd = false;
        }


        board[r][c] = "$" // marks visited
        let dirs = [[1,0],[-1,0],[0,1],[0,-1]];

        // for dfs we move up,down,left,right
        for(let [dr,dc] of dirs) {
            let new_r = r + dr;
            let new_c = c+ dc;

            this.findTrie(board, new_r, new_c, root)
        }
        board[r][c] = ch;

    }

    findWords(board, words) {
        // Phly words insert krwa lay gy
        
        this.rows = board.length;
        this.cols = board[0].length;
        for(let w of words) {
            this.insert(w);
        }

        for(let i = 0; i<this.rows; i++) {
            for(let j=0; j<this.cols; j++) {
                let char = board[i][j];

                if(this.root.children[char]) {
                    this.findTrie(board,i,j,this.root);
                }
            }
        }
        return this.result;
    }
}
