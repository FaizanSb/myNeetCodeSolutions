class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        if(s.length<t.length) {
            return '';
        }

        let requiredLength = t.length;

        let reqMap = new Map();
        for (let c of t) {
            reqMap.set(c,(reqMap.get(c)||0)+1);

        }

        let minWindow = Infinity;
        let i = 0;
        let j = 0;
        let startI = 0;
    
        while(j<s.length) {

            if(reqMap.has(s[j])){
                
                if(reqMap.get(s[j])>0) requiredLength--;

                reqMap.set(s[j],(reqMap.get(s[j])||0)-1);

            }

            while(requiredLength===0) {
                // Srink the window

                const currentWindow = j-i+1;
                if(minWindow > currentWindow) {
                    minWindow = currentWindow;
                    startI = i;
                }
               
               if(reqMap.has(s[i])) {

                 reqMap.set(s[i],(reqMap.get(s[i])||0)+1);
                 if(reqMap.get(s[i])>0) requiredLength++;
                 
               }
               
               i++;


            }

            j++;

        }

        return minWindow === Infinity ? "" : s.slice(startI,startI+minWindow);

    }
}
