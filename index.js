// Be sure to record yourself in the video explaining your code
// and the concepts you used to solve this problem.

// Challenge: Check if Sorted
// Write a function that returns true if the array is sorted in ascending order, false otherwise.

//Input: arr Output: boolean - true or false 

function checkIfSorted(arr) {
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
  // start comparing the current element (#) with the next element (#). Then contiunue comparing every following number with the number before it.  
  // How we will check for ascending order --> if the current number is greater than the next number, the array is not sorted. Return false
    if (arr[i] > arr[i+1]) {
      return false
    }
  }
  return true // If the loop ends, we can confirm its sorted
}

// --- Starter Test Cases ---
console.log(checkIfSorted([1, 2, 3, 4])); // true
console.log(checkIfSorted([1, 3, 2, 4])); // false

// --- Your Turn ---
// Add at least 2 more test cases and explain them out loud in your recording.
console.log(checkIfSorted([1, 2, 2, 3, 4]));
console.log(checkIfSorted([4, 3, 2, 1]));