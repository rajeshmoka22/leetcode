/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const result = [];
    for(let i=0; i<nums.length/2; i+=1) {
        result.push(nums[i]);
        result.push(nums[i+n]);
    }
    return result;
};