/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i=0;
    for(let num of nums){
        if(num !== 0) {
            nums[i] = num;
            i += 1;
        }
    }
    
    while(i<nums.length) {
        nums[i] = 0;
        i += 1;
    }
    
};