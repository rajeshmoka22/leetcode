/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const stonesCount = {};
    for(let i=0; i<stones.length; i+=1){
        const stone = stones[i];
        stonesCount[stone] = (stonesCount[stone] || 0) + 1;
    }
    let count = 0;
    for(let i=0; i<jewels.length;i+=1){
        const jewel = jewels[i];
        count += (stonesCount[jewel] || 0);
    }
    
    return count;
};