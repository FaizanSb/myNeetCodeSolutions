class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const n = heights.length;
    let stack = [];
    let leftArray = [];
    let rightArray = [];
    let maxArea = 0;

    for (let i=0; i<n; i++) {
        
        while (stack.length !== 0 && heights[i] <= heights[stack[stack.length -1]]){
            stack.pop();
        }

        if (stack.length === 0) {
            leftArray[i] = -1;
        } else {
            leftArray[i] = stack[stack.length - 1];
        }
       
        stack.push(i);
    }

    stack = [];

    for (let i=n-1; i>=0; i--) {

         while (stack.length !== 0 && heights[i] <= heights[stack[stack.length -1]]){
            stack.pop();
        }
        if (stack.length === 0) {
            rightArray[i] = n;
        } else {
            rightArray[i] = stack[stack.length - 1];
        }
       
        stack.push(i);
    }

    for (let i=0; i<n; i++) {
        let height = heights[i];
        let width = rightArray[i] - leftArray[i] - 1;
        let area = height * width;
        maxArea = Math.max(maxArea, area);
    }

    return maxArea;
    }
}
