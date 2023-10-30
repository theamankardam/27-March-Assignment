let arr1 = [22, 33, 44, 55, 66, 77];
function doubleArray(arr, callback) {
    return callback(arr);
}
function callback(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    return arr;
}
let newArray = doubleArray(arr1, callback);
console.log(newArray);



