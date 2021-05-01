/**
 * @param {string[]} words
 */
var WordFilter = function(words) {
    this.obj = {};
    for(let i=0; i<words.length; i++)
        {
            const word = words[i];
            
            for(let j=0; j<=word.length; j++)
            {
                const prefix = word.slice(0,j);
                for(let k=0; k<word.length; k++)
                {
                    const suffix = word.slice(k);
                    this.obj[prefix + "#" + suffix] = i;
                }
            }
        } 
};

/** 
 * @param {string} prefix 
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function(prefix, suffix) {
    if(this.obj[prefix + "#" + suffix]>=0) return this.obj[prefix + "#" + suffix];
    return -1;
};

/** 
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */