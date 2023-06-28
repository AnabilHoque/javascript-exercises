const reverseString = function(string) {
    const words = string.split(" ");
    // word -> list of chars -> revese list of chars -> join them to get reveresed word
    const reveresedWords = words.map((word)=>word.split("").reverse().join(""));
    // reverse the order of the list of reversed words, and concatenate them with a space in between
    return reveresedWords.reverse().join(" ");
};

// Do not edit below this line
module.exports = reverseString;
