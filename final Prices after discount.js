/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const result = [];
    
    function getMin(startIndex, curr) {
        for(let j=startIndex; j<prices.length; j+=1){
            if(curr >= prices[j]) return curr-prices[j];
        }
        return curr;
    }
    
    for(let i=0; i<prices.length; i+=1) {
        result.push(getMin(i+1, prices[i]));
    }
    
    return result;
};