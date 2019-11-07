/* eslint-disable require-jsdoc */
/**
 * @param  {array} numList array of numbers
 * @param  {Number} numZ number whose summation equals the other two numbers in the array list
 * @returns {Boolean} returns true if the sum is there  
 */"use strict";

 function checkForSum(numList, numZ) {
    let myMap = new Map();
    for (let num of numList) {
        myMap.set(num, numList);
        if (myMap.has(numZ - num)) {
            return true;
        }
    }
    return false;
}