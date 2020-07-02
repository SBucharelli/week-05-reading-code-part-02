module.exports = function returnHighestNumberWithinRange(arr) {
    let retVal = 0

    arr.forEach((item) => {
        if (item > retVal && item <= 21) {
            retVal = item
        }
    });

    return retVal
}
