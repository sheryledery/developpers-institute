// Exercise 1
// Analyse the code below without running it, what will be the output ?

// var num = 8;
// var num = 10;
// console.log(num);

// Solution :

// The console will display 10 because the code only save the last variable's value.



// Exercise 2
// function numbers() {
//   for (var i = 0; i < 5; i += 1) {
//     console.log(i);
//   }
//     console.log(i);
// }
// numbers();

// Change the code so the var i will be undefined outside of the for loop
 

// Solution :

// function numbers() {
//     for (var i = 0; i < 5; i += 1) {
//       console.log();
//     }
//       console.log(i);
//   }
//   numbers();
  







// Exercise 3
// You have to decide which type of variables you have to use

// Create a global variable that save the amount of money you have in your account
// Create a variable that saves the amount of VAT
// Create a variable that saves the amout of all the expenses and revenu you did /received for the past last month
// Create a JS code that multiplies of the expenses by the VAT
// Create a JS code that changes the amount of the money you have in your account depending on your expenses/revenu.
// Display it

// Solution :

// var globalamount = 6000;
// var VAT = 0.18;
// var expenses = 3500;
// // var globalamount = expenses + VAT;
// // var expenses= globalamount - VAT;
// // var VAT= globalamount - expenses;
// var myaccount = globalamount - expenses;

// function mult(){
// for (var i=0; i < globalamount.length; i++);
// console.log("The result of the expenses multiplicated by the VAT is", expenses * VAT);
// console.log("The amount of money on your account depending on your expenses and revenu is", myaccount)
// return expenses * VAT
// }

// mult()


