class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
   
    jump(nums) {
        let farthest = 0;
        let jump = 0;
        let currEnd = 0;
        // i<nums.length -1; is lea kry gy because last index ko calculate krny sa extra jump count ho ga

        for(let i = 0; i<nums.length -1; i++) {
            // maximum range btay ga jump ki
            farthest = Math.max(farthest,i+nums[i]);

            // agr ham sary jump lay lay gy to jump update kry gy and currEnd ko update kry gy
            if(i===currEnd) {
                jump++;
                currEnd = farthest;
            }
        }
        return jump;
    }
       
 
}
