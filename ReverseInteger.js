/**
 * @param {number} n
 * @return {number}
 */
var reverse = function(x) {
    let reverse = 0;
    while(x!=0){
        reverse = reverse * 10 + x % 10;
        x = parseInt(x/10);
    }
    const limit = 2147483648;
    return (reverse < -limit ||  reverse > limit) ? 0 : reverse;
};