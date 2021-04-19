/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let prod = 1, sum = 0;
    while(n>0){
        const last = n%10;
        prod *= last;
        sum += last;
        n = Math.floor(n/10);
    }
    return prod-sum;
};