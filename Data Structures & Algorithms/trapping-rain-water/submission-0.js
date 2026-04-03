class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let totalWater = 0; 
    while (left < right) {
        if (height[left] < height[right]) {
            leftMax = Math.max(leftMax, height[left]);
            totalWater += leftMax - height[left];
            left++;
        }else {
            rightMax = Math.max(rightMax, height[right]);
            totalWater += rightMax - height[right];
            right--;
        }
    }
    return totalWater;
    }
}
