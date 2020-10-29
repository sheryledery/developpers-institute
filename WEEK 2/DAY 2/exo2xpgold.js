// Exercise 2 : The Grade Assigner
// Ask the user for his grade

// If the score is bigger than 90, console.log “A”
// If the score is between 80 and 90 (included), console.log “B”
// If the score is between 70(included) and 80 (included), console.log “C”
// If the score is lower than 70, console.log “D”

// var grade = prompt ("What is your score ?")
// if (grade > 90){
//     console.log("A");
// } else if (grade > 80 && grade <= 90){
// console.log("B");
// } else if (grade > 70 && grade <= 80) {
// console.log("C");
// } else {
// console.log("D");
// }

// Exercice 3 : Verbing
// Create a variable, it must be a verb.
// If the length of this string is at least 3, it should add ‘ing’ to its end, unless it already ends in ‘ing’, in which case it should add ‘ly’ instead.
// If the string length is less than 3, it should leave it unchanged.
// Example:

//   The string is : "swim" , your program should console.log : "swimming"
//   The string is : "swimming", your program should console.log : "swimmingly"
//   The string is : "go" your program should console.log : "go"

// let word = 'play'
// if(word.length >= 3){
//     if(word.endsWith("ing")){
//         word= word + "ly"
//     }else{
//     word=word + "ing"
// }
// }
// alert(word)



// Exercise 1: Simple If/Else Statement
// Create 2 variables, x and y. Each of them has a different numeric value.
// Write an if/else statement that checks the biggest number.
// If x equals 5 and y equals 2, the program should display:

// x is the biggest number


// let x = 5
// let y = 2
// if (x > y){
//     console.log( x + "is Bigger than " + y)
// } else 
//     console.log( y + "won the amount of " +x);
// if (x===5 && y===2){
//     console.log(x +"is the biggest number");
// }


// EXERCICES XP NINJA:

// Exercice 1 : Age Difference 

// let pers1 = prompt("whats you birthday date?")
// let pers2 = prompt("whats is you birthday person number2?")
// dob1 = 2020 - pers1
// console.log("pers1 is " + dob1 +"years old")
// dob2 = 2020 - pers2
// console.log("pers2 is " + dob2 +"years old")
// if (dob1 < dob2){
//     console.log("in"+ ((dob2%dob1)+2020)  + "you will be half his age")
// }else console.log("in" +((dob1/2)-dob2+2020 ) +" you will be half his age")
// // else console.log("in"+ ((dob1%dob2)+2020)  + "you will be half his age")
// // )