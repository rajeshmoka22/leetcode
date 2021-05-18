/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const obj = {};
    const n = nums.length/2;
    for(let num of nums){
        if(obj[num]) return num;
        obj[num] = 1;
    }
};