class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    // constructor() {
    //     th
    // }
    swimInWater(grid) {
        let n = grid.length;
        let l = grid[0][0];
        let r = n*n-1;
        let result = r;
        while(l<=r) {
            let mid = Math.floor((l+r)/2);
            let visited = Array.from({length:n},()=>Array(n).fill(false));
            if(this.isPossible(grid,0,0,mid,n,visited)) {
                result = mid;
                r = mid-1;
            }else {
                l = mid+1
            }
        }
        return result;
    }

    isPossible(grid,r,c,mid,n,visited) {
        let dir = [[0,-1],[-1,0],[1,0],[0,1]];
        if(r<0 || r>=n || c<0 || c>=n) {
            return false;
        }
        if(visited[r][c]) {
            return false;
        }
        if(grid[r][c] > mid) {
            return false;
        }
        if(r === n-1 && c === n-1) {
            return true;
        }
        visited[r][c] = true;
        for(let [dr,dc] of dir) {
            let newR = r+dr;
            let newC = c+dc;
            
            if(this.isPossible(grid,newR,newC,mid,n,visited)) {
                return true;
            }
                
            
        }
        return false;
    }
}
