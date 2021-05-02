/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const result = [];
    for(;left<=right; left+=1) {
        if(isDividing(left)) result.push(left);
    }
    return result;
};

function isDividing(s){
    let input = s;
    while(input>0){
        const num = input%10;
        if(s%num !== 0) return false;
        input = Math.floor(input/10);
    }
    return true;
}