module.exports = function addingRecursivelyForAnArray(arr) {
    if (arr.length === 0) return 0

    const [first, ...rest] = arr

    // We have Recursion here. 
    // For more info see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion
    return first + addingRecursivelyForAnArray(rest)
}

// To help me understand recursive functions -- thanks Robert!

// start with [0, 10, 20, 30]
// first call: first = 0 rest: [10, 20, 30]; return = 60 <-- final return value
// second call: first = 10 rest: [20, 30]; return = 60
// third call: first = 20 rest: [30]; return = 50
// fourth call: first = 30 rest: [undefined]; return = 30
// fifth call: return 0 since arr.length === 0;  return = 0