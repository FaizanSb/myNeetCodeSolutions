class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    constructor() {
        this.memo = Array.from({length:1001},()=>Array(1001).fill(-1));
    }
    longestCommonSubsequence(text1, text2) {
        //let n = Math.min(text1.length,text2.length); // Determines size 
        return this.LCS(0,0,text1,text2);
    }

    LCS(i,j,txt1,txt2) {
        if(this.memo[i][j] !== -1) return this.memo[i][j];

        // Base case 
        if(i===txt1.length || j === txt2.length) {
            return this.memo[i][j] =  0; // no character is now matched
        }
        if(txt1[i] === txt2[j]) {
            return this.memo[i][j] = 1+this.LCS(i+1,j+1,txt1,txt2) // dono character mathed
        }
        if(txt1[i] !== txt2[j]) {
            return this.memo[i][j] = Math.max(this.LCS(i+1,j,txt1,txt2),this.LCS(i,j+1,txt1,txt2));  // takes maximum of both 
        }
    }

}
