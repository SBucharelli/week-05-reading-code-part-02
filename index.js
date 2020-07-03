module.exports =
    function xPowerOfY(x, y) {
        if (y === 0) return 0
        if (y === 1) return x

        return x * xPowerOfY(x, y - 1)
    }
// Trying to understand the process of the code... going through examples; commented out for personal reference
// Note: return 0 for any number to the power of 0 is incorrect; it should equal 1.
// console.log(xPowerOfY(2, 0))
// return 2 * 0 (condition y === 0)
// return 0

// console.log(xPowerOfY(2, 1))
// return x (condition y === 1)
// return 2

// console.log(xPowerOfY(2, 2))
// return (2) * function(2, 2 - 1)
// return (2) * function(2, 1)
// return (2) * x (condition if y=== 1)
// return (2) * (2)
// return 4

// console.log(xPowerOfY(2, 3))
// return (2) * function (2, 3 - 1))
// return (2) * function (2, 2)
// return (2) * (2) function (2, 2 - 1)
// return (2) * (2) * function (2, 1)
// return (2) * (2) * x (condition y === 1)
// return (2) * (2) * (2)
// return 8

// console.log(xPowerOfY(2, 4))
// return (2) * function(2, 4 - 1)
// return (2) * function(2, 3)
// return (2) * (2) * function (2, 3 - 1)
// return (2) * (2) * function (2, 2)
// return (2) * (2) * (2) function (2, 2 - 1)
// return (2) * (2) * (2) function (2, 1)
// return (2) * (2) * (2) * x (condition if y=== 1)
// return (2) * (2) * (2) * (2)
// return 16

// array1 = [2, 3, 4]
// array2 = [1, 2, 3]
// console.log(xPowerOfY(array1[0], array2[2]))
// return (2) * (2) * (2)
// return 8