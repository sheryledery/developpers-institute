// Exercise 2
// Create a stuctured html file linked to a JS file

// 1. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

// Sample Output: //"0 is even" //"1 is odd" //"2 is even"

// Solution:

// for (let i = 0 ; i < 15; i++){

// if (i % 2 === 0){
//     console.log("even");
// }else {
//     console.log("odd")
// }
// }


// Exo 3:

// let friends = ["david", "sarah", "paul", "lea"];

// for (var i = 0 ; i < friends.length; i++) {
//     console.log("hi " + friends[i])

// }


// Exo 4 :

// let colors = ["blue", "yellow", "red"];
//     for (let item of colors){
//         console.log("the color is", item);
//     }


// Exo 5 :

// let shoppinglist = {
//     fruit: "pear",
//     meat: "chicken",
//     drink: "cola"
// }

// for (let shoppingitem in shoppinlist){
//     console.log("I have to buy", shoppinglist [shoppingitem]);
// }

// Exo 6 :

// Break Statement
// The break statement breaks the loop and continues executing the code after the loop

// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//       break;
//     }
//   console.log("The number is " + i); // 0 1 2
// }



// Exo 7:

// Continue Statement
// Thecontinue statement breaks one iteration (in the loop), and continues with the next iteration in the loop.

// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//       continue;
//   }
//   console.log("The number is " + i); // 0 1 2 4 5 6 7 8 9
// }


// Exo 8 :

// While Loop
// Allows code to be executed repeatedly based on a given Boolean condition.

// Syntax


// let n = 0;
// while (n < 3){
//     n++;
//    console.log(n)
// }

// Exo 9 :

// var names= ["john", "sarah", 23, "Rudolf",34]

// 1. Write a JavaScript for loop that will go through the variable names.

// if the item is not a string, pass.
// if the item is a string, check if it's first letter is in uppercase. If not, change it to uppercase and then display the name.
// 2. Write a JavaScript for loop that will go through the variable names

// if the item is not a string, go out of the loop.
// if the item is a string, display it.


// Solution :

// var names= ["john", "sarah", 23, "Rudolf",34]

// for (let i = 0; i < names.length; i++){

//     if (isNaN(names[i]) == true){
//         if (names[i].charAt(0) == names[i].charAt(0).toUpperCase()){
//             console.log(names[i]);
//         }
//         else {
//             names[i]= names[i].charAt(0).toUpperCase() + names[i].slice(1) };
//     }
//     else {
//         console.log("not string")
//         continue;
//     }
//     console.log(names[i])
// }


// Exo 10 :
// To iterate through an array:

// Solution :


// let arr = [1, 4, 7, 10] // ma liste
//     for (let i=0; i<arr.length; i++) { // définir le nombre de répétition de ma liste, jusque où ect..
//         console.log(arr[i]); // appliquer le déroulement de ma boucle
//     }



// Exercice 1 xp :

// Exercise 1 : Your Favorite Colors
// Create an array to hold your top colors.
// For each choice, console.log a string like: “My #1 choice is blue”
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the right suffix for the number.
// Hint : create an array of suffix to do the Bonus

// Solution :

// var colors = ["pink", "black", "blue", "purple"] // ma liste
// var suffix =["st", "nd", "rd", "th"]
// for (let i=0; i < colors.length; i++)
// for (let i = 0; i < colors.length; i++){ // nombre de répétition de la boucle qui rentre dans la liste
//  let favoritecolor = colors[i] // récupérer chaque élement de la liste dans l'ordre

//  console.log("My",i+1+suffix, "favorite color is" ,favoritecolor)
// }



// Exercise 2 xp :

// Secret Group
// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their firstnames, sorted in alphabetical order.
// Console.log the name of their secret society.

// Solution :

// // let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
// // let list=[]
// // for (let i=0; i < names.length; i++){
// //     console.log(names[i].charAt(0));
// //     list.push(names[i].charAt(0));

// // }
// // console.log(list)

// // list.join("")
// // console.log(list.join(""))


// Exercise 3 xp :

// Repeat The Question
// Ask a number to the user, while the number is smaller than 10, ask him for a new number.
// Tip : Which while loop is more relevant for this situation?

// Solution :

// let = prompt("Enter a number")

// for (let i= 0; i < 10; i++){
// if (i < 10 )
// prompt("Give me a new number")
// }

// for (let i=10; i > 10; i++){
// if (i > 10)
//     prompt("thank you")
// }


// Exo 1 xp gold :
// Attendance
// Suppose you have a guest list of students and the country they are from, stored as key-value pairs in an object. You have to make the attendance.

// let guestList = {
//   Randy: "Germany",
//   Karla: "France",
//   Wendy: "Japan",
//   Norman: "England",
//   Sam: "Argentina"
// }
// Ask the student for his name :
// If the name is in the object, console.log the name of the student and the country he comes from.
// "Hi! I'm [name], and I'm from [country]."
// If the name is not in the object, console.log :"Hi! I'm a guest."


// Solution :


let guestList = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
  }

  let username = prompt("what is your name ?")
  for (let name in guestlist){
      if (username == name ){
          console.log("Hi ! I'm, " + names + " and I'm from" + guestlist[username] + " .")
      }else if (!names == name) {
          console.log("Hi! I'm a guest.")
      }
    }