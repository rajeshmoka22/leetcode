/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length <=1 ) return nums.length;
    let slow=0, fast=1;
    while(fast<nums.length) {
        if(nums[slow]!==nums[fast]) {
            slow+=1;
            nums[slow] = nums[fast];
        }
        fast +=1
    }
    return slow+1;
};