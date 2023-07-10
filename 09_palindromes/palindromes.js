const palindromes = function (s) {
    const removeSpacesAndPunctuation = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replaceAll(" ", "").toLowerCase();
    let leftPtr = 0;
    let rightPtr = removeSpacesAndPunctuation.length-1;
    while (leftPtr <= rightPtr) {
        if (removeSpacesAndPunctuation[leftPtr] !== removeSpacesAndPunctuation[rightPtr]) {
            return false;
        }
        leftPtr++;
        rightPtr--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
