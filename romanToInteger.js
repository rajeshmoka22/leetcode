/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romans = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    const len = s.length;
    let integer = romans[s[len-1]];
    for(let i=len-2; i>=0; i-=1){
        if(romans[s[i]]<romans[s[i+1]]) integer -= romans[s[i]];
        else integer += romans[s[i]];
    }
    return integer;
};