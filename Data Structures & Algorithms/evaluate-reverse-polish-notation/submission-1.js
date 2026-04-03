class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

    for(let i=0;i<tokens.length;i++){
        if(tokens[i]==="+"){
            let a = stack.pop();
            let b = stack.pop();
            stack.push(a+b);
        }else if(tokens[i]==="-"){
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b-a);
        }else if(tokens[i]==="*"){
            let a = stack.pop();
            let b = stack.pop();
            stack.push(a*b);
        }else if(tokens[i]==="/"){
            let a = stack.pop();
            let b = stack.pop();
           stack.push(b/a > 0 ? Math.floor(b/a) : Math.ceil(b/a));
        }else{
            stack.push(parseInt(tokens[i]));
        }
    }
    
    return stack[0];
    }
}
