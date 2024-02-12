function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Element found, return its index
        } else if (arr[mid] < target) {
            left = mid + 1; // Continue searching in the right half
        } else {
            right = mid - 1; // Continue searching in the left half
        }
    }

    return -1; // Element not found
}

// Example usage:
let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
let target = 13;
let index = binarySearch(arr, target);
console.log("Index of", target, ":", index);
