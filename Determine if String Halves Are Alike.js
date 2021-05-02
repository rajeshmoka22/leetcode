/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    s = s.toLowerCase();
    const vowels = {a: true, e:true, i: true, o:true, u:true};
    let l = 0;
    let r = 0;
    let half = s.length/2;
    for(let i=0; i<half;i+=1){
        if(vowels[s[i]]) l += 1;
        if(vowels[s[i+half]]) r += 1;
    }
    
    return l === r;
};