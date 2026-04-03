class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    constructor() {
        this.temp = []
        this.res = []

        this.keys = new Map([
            ['2','abc'],
            ['3','def'],
            ['4','ghi'],
            ['5','jkl'],
            ['6','mno'],
            ['7','pqrs'],
            ['8','tuv'],
            ['9','wxyz']
        ]);
    }

    solve(idx,digits,map) {
        if(idx === digits.length) {
            this.res.push(this.temp.join(""));
            return;
        }

        let ch = digits[idx];
        let str = map.get(ch);
        
        for(let i = 0; i<str.length; i++) {
            // do kr lo
            this.temp.push(str[i]);
            // explore kr lo
            this.solve(idx+1,digits,map);
            // Undo kr lo
            this.temp.pop();
        }
    }

    letterCombinations(digits) {
        if(digits.length === 0) {
            return [];
        }
        let idx = 0;

        this.solve(idx,digits,this.keys);
        return this.res;
    }
}
