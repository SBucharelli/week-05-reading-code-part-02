module.exports = function addNewItemToArray(list) {
    var newList = []

    for (var i = 0; i < list.length; i++) {
        // check every item in the array being passed through; check if item is not in the new list
        if (!newList.includes(list[i])) {
            // if it's not in the newList, add the missing item
            newList.push(list[i])
        }
    }

    return newList
}
