/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const indexes = {};
    for(let i=0;i<nums.length; i+=1){
        const requiredNum = target-nums[i];
        const targetIndex = indexes[requiredNum];
        if(targetIndex>=0 && i!==targetIndex) {
            return [i, targetIndex];
        } else {
            indexes[nums[i]] = i;
        }
    }
    return null;
};