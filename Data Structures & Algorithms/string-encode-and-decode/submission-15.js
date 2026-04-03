class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    stringToASCII(s) {
        let asciiArray = [];
        for(let i=0; i<s.length; i++) {
            asciiArray.push(s.charCodeAt(i));
        }
        return asciiArray;
    }

    ASCII_to_String(arr) {
        let str = '';
        for(let i=0;i<arr.length; i++) {
            str += String.fromCharCode(arr[i]);
        }
        return str;
    }
    
    encode(strs) {
        if(!strs || strs.length === 0 ) {
            return '';
        }


        let encodedValues = [];
        for(let s of strs) {
            if(s === "") {
                encodedValues.push("EMPTY");
            }else {
                const asciiValues = this.stringToASCII(s);
                encodedValues.push(asciiValues.join(','));
                // console.log("The s is ",encodedValues);
            }
            
        }
        
        return encodedValues.join('|');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // console.log("After joining | The string is ",str);
        if(!str || str.length === 0) {
            return [];
        }

        let parts = str.split('|');
        let decodedStrings = [];
        
        for(let part of parts) {
            if(part === 'EMPTY') {
                decodedStrings.push("");
            }else {
                 const asciiValues = part.split(',').map(num => parseInt(num));

                const decodedString = this.ASCII_to_String(asciiValues);
                decodedStrings.push(decodedString);
            }
           
        }

        return decodedStrings; 
    }
}
