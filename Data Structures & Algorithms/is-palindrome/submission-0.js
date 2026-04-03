class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(str) {
         let lowerString = str.toLowerCase().replaceAll(' ', '').replaceAll(/[^a-zA-Z0-9]/g, '');
    let left = 0;
    let right = lowerString.length - 1;
    
    while (left < right) {
        if (lowerString[left] !== lowerString[right]) {
            
            return false;
        }
        left++;
        right--;
    }
    return true;

    }
}
