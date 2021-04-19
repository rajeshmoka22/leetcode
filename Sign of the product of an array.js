/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums, i=0, product=1) {
    if(i === nums.length) return product > 0 ? 1: product < 0 ? -1 : 0;
    product *= nums[i++];
    return arraySign(nums, i, product);
};