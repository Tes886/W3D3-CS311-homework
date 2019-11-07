/**
 * @param  {array} numList array of numbers
 * @returns {array} array of numbers without dups
 */"use strict";
// eslint-disable-next-line require-jsdoc
function removeDups(numList) {
    let myMap = new Map();
    for (let num of numList) {
        myMap.set(num, true);
    } 
    let array = [];
    for (let num of myMap.keys()) {
    array.push(num);
    }
    return array;
}
removeDups([1, 3, 4, 6, 2, 4, 3, 1, 8, 5, 6]);