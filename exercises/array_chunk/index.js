// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//solution One
// function chunk(array, size) {
//     let result = [];

//     for (let i = 0; i < array.length; i += size) {

//         result.push(array.slice(i, i + size))
//     }
//     return result;
// }

//solution Two

function chunk(array, size) {
    let chunked = [];
    for (let e of array) {
        const last = chunked[chunked.length - 1];

        if (!last || last.length === size) {
            chunked.push([e])
        } else {
            last.push(e);
        }
    }
    return chunked;
}


module.exports = chunk;
