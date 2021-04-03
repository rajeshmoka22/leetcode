/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const arr = [];
    for(let i=0; i<s.length; i+=1){
        arr[indices[i]] = s[i];
    }
    
    return arr.join('')
};