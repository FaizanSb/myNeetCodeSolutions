class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    checkSum(nums,l,r){
        let res = 0;
        for(let i = l; i<=r; i++) {
            res+=nums[i];
        }
        return res;
    }
    
    minSubArrayLen(target, nums) {
        let l = 0;
        let res = Infinity;
        for(let r=0; r<nums.length; r++) { 
           
                while(l<=r && this.checkSum(nums,l,r) >= target) {
                    if(res > r-l+1) {
                        res = Math.min(res,r-l+1);
                    }
                    l++;

                }         

        }
        return res === Infinity ? 0 : res;
    }
}
