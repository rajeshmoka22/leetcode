/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let curr_max = 0, max = -Infinity;
    for(let num of nums) {
        curr_max += num;
        if(curr_max > max) max = curr_max;
        curr_max = curr_max > 0 ? curr_max : 0;
    }
    return max;
};