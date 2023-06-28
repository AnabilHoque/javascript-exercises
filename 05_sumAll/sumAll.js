const sumAll = function(start, end) {
    // could use Number.isInteger() instead of typeof
    if (typeof start !== "number" || typeof end !== "number") {
        return "ERROR"
    }
    if (start < 0 || end < 0) {
        return "ERROR";
    }

    let sum = 0;
    
    if (start > end) {
        for (let i = start; i >= end; i--) {
            sum += i;
        }
        return sum;
    }

    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
