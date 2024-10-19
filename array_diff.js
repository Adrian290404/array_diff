function arrayDiff(a, b) {
    /* In codewars this option was considered valid but when the array has more than one element it doesn't work
    let newArr = a.filter(num => b.some(e => e !== num))*/
    let newArr = a.filter(num => !b.includes(num));
    return newArr
}
function createRandomArray(length, min, max) {
    let arr = []
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    return arr
}
let arr1 = createRandomArray(10, 1, 10)
let arr2 = createRandomArray(3, 1, 10)
let diff = arrayDiff(arr1, arr2)
document.getElementById("first").innerHTML += arr1.join(", ")
document.getElementById("second").innerHTML += arr2.join(", ")
document.getElementById("diff").innerHTML += diff.join(", ")