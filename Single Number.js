/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {};
    nums.forEach(num => {
       if(obj[num]) obj[num] += 1;
        else obj[num] = 1;
    })
    
    const keys = Object.keys(obj);
    for(let key of keys){
        if(obj[key] === 1) return key;
    }
};