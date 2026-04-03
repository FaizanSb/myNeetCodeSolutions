class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const map1 = new Map();
        let map2 = new Map();

        for(let char of s1) {
            map1.set(char,(map1.get(char)||0)+1);

        }

        let sizeOfwindow = s1.length;
        let l = 0;
       
       for(let r = 0;r<s2.length;r++) {
            let rChar = s2[r];
            map2.set(rChar,(map2.get(rChar)||0)+1);
            if(r-l+1 > s1.length) {
                let lChar = s2[l];
                map2.set(lChar,map2.get(lChar)-1);

                if(map2.get(lChar)===0) {
                    map2.delete(lChar);
                }

                l++;
            }

            if(this.checkEquality(map1,map2)) {
                return true;
            }
       }
       

        return false;
    }

    checkEquality(map1,map2) {
        if(map1.size !== map2.size) return false;

        for(let [key,val] of map1) {
            if(!map2.has(key)) return false;
            if(map2.get(key) !== val) return false;
        }

        return true;
    }
}
