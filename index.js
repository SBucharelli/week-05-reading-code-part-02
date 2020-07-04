// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
module.exports = function compareAndMergeTwoArraysInConsecutiveOrderIfPossibleThenConcatTheRemainder(val1, val2) {
    let newList = [];

    /* While both arrays have a length and it's possible to compare them, this will compare every index[0]
    for both arrays. This will be done in a consecutive manner as much as possible based on the condition that the
    value that is being extracted must be the smaller value. As an item is .shift (removed from the array) and 
    .push (added to the newList), a new item will become index[0] in the arrays that were input and the comparison 
    will continue.
    */
    while (val1.length && val2.length) {
        if (val1[0] <= val2[0]) {
            newList.push(val1.shift());
        } else {
            newList.push(val2.shift());
        }
    }
    // once the comparisons cannot be made, this return will concatinate the remaining items into the newList
    return newList.concat(val1).concat(val2);
};

/*
let data = ['A', 'A', 'C', 'E']
let newData = ['B', 'D', 'Y', 'Z']

console.log(compareAndMergeTwoArraysInConsecutiveOrderIfPossibleThenConcatTheRemainder(data, newData))

let numData = [2, 5, 7]
let numOther = [1, 6, 4]

console.log(compareAndMergeTwoArraysInConsecutiveOrderIfPossibleThenConcatTheRemainder(numData, numOther))

let numData2 = [2, 5, 7, 3, 5, 1]
let numOther2 = [1, 6, 4]

console.log(compareAndMergeTwoArraysInConsecutiveOrderIfPossibleThenConcatTheRemainder(numData2, numOther2))
*/