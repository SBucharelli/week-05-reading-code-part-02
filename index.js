// We are using the `%` Remainder operator
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder
// and https://www.mathsisfun.com/definitions/modulo-operation.html
module.exports = function greatestCommonDivisor(x, y) {
    // while y - as long as y is a true value
    while (y) {
        const t = y
        y = x % y
        x = t
    }

    return x
}

/*
x = 10
y = 4

const t = 4
y = 10 % 4 ==> y = 2
x = 4

const t = 2
y = 4 % 2 ==> y = 0
x = 2
return 2
*/