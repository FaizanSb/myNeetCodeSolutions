class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkOpening(str) {
    if (str === '{' || str === '[' || str === '(') {
        return true;
    }
    return false;
}
    isValid(str) {
        let arr = str.split('');
    let stack = [];

    let map = {
        '}': '{',
        ']': '[',
        ')': '('
    }

    for (let i = 0; i < arr.length; i++) {
        if (this.checkOpening(arr[i])) {
            stack.push(arr[i])
          
        } else {
            let top = stack.pop();           
            if (top != map[arr[i]]) {
                
                return false;
            }
        }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
    }
}
