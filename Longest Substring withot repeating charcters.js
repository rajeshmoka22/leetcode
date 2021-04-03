/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let indexes = {};
    let currLength = 0;
    let maxLength = 0;
    for(let i=0; i<s.length; i+=1) {
        const char = s[i];
        const index = indexes[char];
        if(index >=0) {
            indexes = {};
            for(let j=index+1;j<=i;j+=1){
                indexes[s[j]] = j; 
            }
            currLength = i-index;
            maxLength = Math.max(maxLength, currLength);
        }
        else {
            indexes[char] = i;
            currLength += 1;
            maxLength = Math.max(maxLength, currLength);
        }
    }
    console.log(maxLength);
    return maxLength;
};