/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    const chars = {};
    for(let i = 0; i<s.length; i += 1){
        const char = s[i];
        if(chars[char]) chars[char] += 1;
        else chars[char] = 1;
    }
    for(let i=0; i< t.length; i+=1){
        const char = t[i];
        if(!chars[char] || chars[char] < 1) return false;
        else chars[char]-=1
    }
    return true;
};