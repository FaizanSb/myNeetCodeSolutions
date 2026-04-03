class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let string1 = s.split('').sort().join('');
    let string2 = t.split('').sort().join('');

    console.log(string1);
    console.log(string2);
    if(string1 === string2){
        return true;
    }
    return false;
    }
}
