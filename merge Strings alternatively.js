/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const result = [];
    let i=0;
    const length = Math.min(word1.length, word2.length);
    while(i<length){
        result.push(word1[i], word2[i]);
        i += 1;
    }
    while(i<word1.length){
        result.push(word1[i]);
        i+=1;
    }
    while(i<word2.length){
        result.push(word2[i]);
        i+=1;
    }
    return result.join('');
};