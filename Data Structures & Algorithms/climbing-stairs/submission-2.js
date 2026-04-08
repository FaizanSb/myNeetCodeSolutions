class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
   
    climbStairs(n) {
       // ab ma is question ko bottom up approach sa solve kro ga
       let t = new Array(n+1);
       t[0] = 0;
       t[1] = 1;
       t[2] = 2;

       for(let i = 3; i<=n; i++) {
            t[i] = t[i-1] + t[i-2];
       }

       return t[n];
    }
    
}
