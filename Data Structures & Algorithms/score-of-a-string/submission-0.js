class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let ascII = Array.from(s).map((char)=>{
            return char.charCodeAt(0);
        })

        let absSum = ascII.reduce((acc,current,cIndex,arr)=>{
            if(cIndex < arr.length-1){
                acc += Math.abs(current - arr[cIndex+1]);
            }
            return acc;
        },0)

        return absSum;
    }
    

    
}
