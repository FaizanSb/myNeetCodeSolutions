class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];
    let result = [];

    for (let i = temperatures.length -1; i >= 0; i--) {
        while (stack.length > 0 && temperatures[i] >= temperatures[stack[stack.length -1]]) {
            stack.pop();
        }
        if (stack.length === 0) {
            result[i] = 0;
        } else {
            result[i] = stack[stack.length -1] - i;
        }
        stack.push(i);
    }
    return result;
    }
}
