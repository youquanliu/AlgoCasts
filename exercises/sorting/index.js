//Bubble Sort
function bubbleSort(array) {
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                done = false;
                var tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }
    return array;
}
//Bubble: Cocktail Sort
function cocktailShakerSort(inputArr) {

    let n = inputArr.length;
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < n - 1; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                sorted = false;
            }
        }

        if (sorted)
            break;
        sorted = true;

        for (let j = n - 1; j > 0; j--) {
            if (inputArr[j - 1] > inputArr[j]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
                sorted = false;
            }
        }
    }
    return inputArr;
}
//Merge Sort Implentation (Recursion)
function mergeSort(unsortedArray) {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(unsortedArray.length / 2);

    // This is where we will be dividing the array into left and right
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);
    console.log(`left: ${left}, right:${right}`);
    // Using recursion to combine the left and right
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [...arr, ...left, ...right]
}
//Quick Sort(Recursion)
function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            //swap(items, i, j); //sawpping two elements
            [items[i], items[j]] = [items[j], items[i]]
            i++;
            j--;
        }
    }
    return i;
}
function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
//Selection Sort
function selectionSort(inputArr) {
    let n = inputArr.length;

    for (let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (inputArr[j] < inputArr[min]) {
                min = j;
            }
        }
        if (min != i) {
            // Swapping the elements
            swap(inputArr, i, min)
            // let tmp = inputArr[i];
            // inputArr[i] = inputArr[min];
            // inputArr[min] = tmp;
        }
    }
    return inputArr;
}
//Insertion Sort
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
            } else {
                break;
            }
        }
    }
    return arr;
}


let countingSort = (arr, max) => {
    //array has same length of max
    //inishill with zeros
    let counts = new Array(max + 1).fill(0);
    //count appear times into coutns arr
    arr.forEach(num => {
        counts[num]++;
    })
    //new output arr 
    let sorted = [];
    //loop through count array, push element according to appear times
    for (let i = max; i >= 0; i--) {
        const count = counts[i];
        for (let time = 0; time < count; time++) {
            sorted.push(i);
        }
    }
    return sorted;
};
var numbers = [3, 12, 6, 11, 7, 4, 13, 16, 16, -1];
var items = [5, 10, 7, 15, 2, 9, -3, -1, 0, 99];



console.time('mergeSort2');
console.log(mergeSort2(numbers))
console.timeEnd('mergeSort2');
