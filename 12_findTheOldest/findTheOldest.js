const findTheOldest = function(arrOfObjects) {
    return arrOfObjects.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentPersonAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        if (currentPersonAge > oldestAge) {
            return currentPerson;
        }
        return oldest;
    });
};

function getAge(birth, death) {
    if (!death) {
        return (new Date).getFullYear() - birth;
    }
    return death-birth;
}

// Do not edit below this line
module.exports = findTheOldest;
