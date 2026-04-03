class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    if (nums.length === 0) return 0;
    
    let sortedNums = nums.sort((a, b) => a - b);
    const uniqueArr = [...new Set(sortedNums)];
    let longestSequence = 1;
    let current = 1;
    for (let i = 0; i < uniqueArr.length; i++) {
        if(uniqueArr[i+1] === uniqueArr[i]+1){
            current++;
        }else{
            longestSequence = Math.max(current,longestSequence);
            current  = 1;
        }
    }
    return Math.max(current,longestSequence);
    }
}
