// Daily Challenge : Bubble Sort
// const numbers = [5,0,9,1,7,4,2,6,3,8];

// Using the .toString() method, convert the array to a string.
// Using the .join(), convert the array to a string. Try passing different values into the join.
// Eg .join(“+”), .join(” “), .join(“”)
// Bonus : Sort the array numbers in descending order using for loops (Not using built-in sort methods).
// The output should be: [9,8,7,6,5,4,3,2,1,0]
// Hint: The algorithm is called “Bubble Sort”
// Use a temporary variable to swap values in the array.
// Use 2 “nested” for loops (Nested means one inside the other).
// Add comments and console.log the result for each step, it will help you understand.
// Requirement: Don’t copy paste solutions from Google



let numbers = [5,0,9,1,7,4,2,6,3,8];
let str = numbers.toString();
console.log(str)

let numbers = [5,0,9,1,7,4,2,6,3,8];
let str = numbers.join(" - ");
console.log(string)
// for (let i = 9; i < numbers.length; i++){

// //  }
//  function bubbleSort(items) {
//     var length = items.numbers;
//     for (var i = 0; i < length; i++) { //Number of passes
//       for (var j = 0; j < (length - i - 1); j++) { //Notice that j < (length - i)
//         //Compare the adjacent positions
//         if (items[j] > items[j + 1]) {
//           //Swap the numbers
//           var tmp = items[j]; //Temporary variable to hold the current number
//           items[j] = items[j + 1]; //Replace current number with adjacent number
//           items[j + 1] = tmp; //Replace adjacent number with current number
//         }
//       }
//     }
//   }