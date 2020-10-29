// defining a function
// function workingWithArray (list, name) {
   
//     for(let i of list){
//         console.log(name, "loves", i);
//     }
// }
// calling a function
// workingWithArray(["blue", "red", "yellow"], "David")



// Exercise 1
// 1. Create a structured html file linked to a js file

// 2. Write a JS function that takes a parameter: myAge

// 3. Console.log the age of my mum and my dad (my mum is twice my age, and my dad is 1.2 the age of my mum)

// 4. Call the function

// Solution :

//  function age (myAge){
//      let mom= myAge * 2
//      let dad= mom * 1.2

//     console.log("My mom is",  mom, ",", "My dad is", dad)
//  }
//  age(18)



// Exercise 2
// 1. Create a structured html file linked to a js file

// 2. Write a JS function that takes a parameter: myAge

// 3. Return the age of my mum (my mum is twice my age)

// 4. Call the function

// 5. Console.log the age of my mum


// Solution :

// function age (myAge){
//     let mom= myAge * 2
//     console.log("My mom is ", mom)
//     return mom
// }


// age(18)



// Exercise 1 xp : 
// Keyless Car
// Make a keyless car EVEN BETTER!
// This is the code of the previous part of the exercise :

// let age = prompt("What is your age?");

// if (Number(age) < 18) {
//     alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
//     alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
// }
// Create a function called checkDriverAge() that will contain the code above. Call the function and notice the benefit in having a function instead of a simple if/else if/else statement.
// Instead of using prompt, make the checkDriverAge() function accept an argument : age, so that if you enter:
// checkDriver


// Solution :


// function checkDriverAge(age){


// if (Number(age) < 18) {
//     alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
//     alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
// }

// }
//  checkDriverAge(18)


// Exercise 2 xp : 
// Is_Blank
// Write a program to check whether a string is blank or not.

// console.log(is_Blank('')); --> true
// console.log(is_Blank('abc')); --> false


// Solution :

// function is_Blank (input){
//     if (input.length === 0) {
//         console.log("true")
//     } else {
//         console.log("false")
//     }
// }

// is_Blank(''); 
// is_Blank('abc');


// OU 

//   function is_Blank (input) {
//     if (input.length === 0)
//     return true;
//     else 
//     return false;
//   }

// console.log(is_Blank('')); 
// console.log(is_Blank('abc'));



// Exercise 3 xp : 
// Abbrev_name
// Write a JavaScript function to convert a string in abbreviated form.

// console.log(abbrev_name("Robin Singh")); --> "Robin S."


// Solution :


// function abbrev_name (str1) {
//     var split_names = str1.trim().split(" ");
//     if (split_names.length > 1) {
//         return (split_names[0] + " " + split_names[1].charAt(0) + ".");
//     }
//     return split_names[0];
// };
// console.log(abbrev_name("Robin Singh"));

// OU 

// function abbrev_name (name){
//     var res = name.split(" ");
//     var rob = name.charAt(5)
// console.log(res)

// }
// console.log(abbrev_name("Robin Singh"));




// Exercise 4 xp : 
// SwapCase
// Write a JavaScript function which accept a string as input and swap the case of each character.
// For example :

// if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.


// Solution :


// function swapCase (letters){
// var newLetters = "";
// for (var i=0; i< letters.length; i++){
//     if (letters[i] === letters[i].toLowerCase()){
//         newLetters += letters[i].toUpperCase();
//     }else{
//         newLetters += letters[i].toLowerCase();
//     }
// }
// console.log(newLetters);
// return newLetters;
// }

// var text = "The Quick Brown Fox";
// var swappedText = swapCase(text); 


// Exercise 5 xp : 
// Amazon Shopping
// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }
// Create a function called checkBasket().
// It should:
// ask the user for the item he wants
// and let him know if it’s in the basket or not
// Hint: Use the in keyword inside the conditional


// Solution :

// function checkBasket(){
//     let amazonBasket = {
//         glasses: 1,
//         books: 2,
//         floss: 100
//     }
//     prompt("What do you want ?")
// }

// checkBasket()