// (1) Loop through the whole array starting from index 1
// (2) If the number in the array at index i-1 is greater than i, swap the numbers and continue
// (3) Once the end of the array is reached, start looping again from the beginning
// (3) Once no more elements can be swapped, the sorting is complete

function swap (arr, i1, i2) {
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}

function bubbleSort (arr) {

  var swapped = true;

  // continue until all elements have been swapped
  while (swapped) {
    // set swapped to false so the loop stops
    // unless the two elements are actually swapped
    swapped = false;

    // now loop through array swapping adjacent elements
    for (var i = 1; i < arr.length; i++) {
      if (arr[i-1] > arr[i]) {
        swap (arr, i-1, i);
        swapped = true;
      }
    }

  }

  return arr;

}

console.log(bubbleSort([103, 45, 2, 1, 97, -4, 67]));

// This algorithm runs in worst case O(n2) time where n is the number of items that
// need to be sorted because we potentially need to loop through the entire array every
// time we reach a new element, making the running time n * n = n2.
