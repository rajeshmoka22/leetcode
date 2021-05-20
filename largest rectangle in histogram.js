/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const left = []
    const right = []
    let stack = [];
    let maxArea = 0;
    
    for(let i = 0; i < heights.length; i++) {
        // find the left bound
        // keep moving while the left bound is >= the current height
        while(stack.length && heights[stack[stack.length-1]] >= heights[i]) stack.pop();
        if(stack.length) left.push(stack[stack.length-1] + 1);
        else left.push(0);
        stack.push(i);
    }

    stack = [];
    
    for(let i = heights.length-1; i >= 0; i--) {
        while(stack.length && heights[stack[stack.length-1]] >= heights[i]) stack.pop();
        if(stack.length) right.push(stack[stack.length-1] - 1);
        else right.push(heights.length-1);
        stack.push(i);
    }
    
    right.reverse();
    
    for(let i = 0; i < heights.length; i++) {
        const width = right[i] - left[i] + 1;
        const area = width * heights[i];
        maxArea = Math.max(area, maxArea);
    }
    return maxArea;
};