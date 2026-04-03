class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let checkElem = new Set();
        let end = 0;
        let start = 0;
        let subStr = 0;
        let maxStr = 0;
        while(start<s.length) {
            if(!checkElem.has(s[start])){
                checkElem.add(s[start]); 
                subStr++;
                maxStr = Math.max(subStr,maxStr);
                start++;
                
            }else{
                checkElem.delete(s[end]);
                subStr--;
                end++;
            }
        }
        return maxStr;
    }
}
