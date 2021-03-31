/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const sum = nums.reduce((acc, num) => acc+num)
    const length = nums.length;
    const missingNum = (length*(length+1))/2 - sum ;
    return missingNum;
};