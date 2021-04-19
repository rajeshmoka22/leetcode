/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    if(nums.length === 0) return [];
    let currSum = 0;
    return nums.map(num => {
        currSum += num;
        return currSum;
    })
};