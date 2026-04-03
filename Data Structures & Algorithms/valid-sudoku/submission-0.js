class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
         let rows = Array.from({ length: 9 }, () => new Set());
    let cols = Array.from({ length: 9 }, () => new Set());
    let boxes = Array.from({ length: 9 }, () => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let v = board[i][j];
            if (v === '.') continue; // skip empty cells

            let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            // Check duplicates
            if (rows[i].has(v) || cols[j].has(v) || boxes[boxIndex].has(v)) {
                return false; // invalid board
            }

            // Mark value as seen
            rows[i].add(v);
            cols[j].add(v);
            boxes[boxIndex].add(v);
        }
    }

    return true; // all checks passed
    }
}
