/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const half = Math.ceil(nums.length/2);
    let counter = {};
    for(let i= 0; i< nums.length; i += 1){
        const num = nums[i];
        counter[num] = (counter[num] || 0) + 1;
        if(counter[num] === half) return num;
    }
};