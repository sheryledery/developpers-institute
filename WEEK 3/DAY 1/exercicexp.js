// Exercise 1 : Change The Navbar

//  <div id="navBar">
//     <ul>
//         <li><a href="#">Profile</a></li>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">My Friends</a></li>
//         <li><a href="#">Messenger</a></li>
//         <li><a href="#">My Pics</a></li>
//     </ul>
// </div>`
// In the div above, change the value of the identity attribute (id) from navBar to socialNetworkNavigation, using the setAttribute method.
// We are going to add a new li to the ul.
// First, create a new li tag (use the createElement method)
// Then create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (li).
// Finally, append this updated list node to the unordered list above, using the appendChild method.
// Bonus
// Use the firstChild and the lastChild properties to retrieve the first and last li elements under the parent ul node. Display the text of each link.(Hint: nodeValue property).


// Solution :


// let div = document.getElementById("navbar")
// div.setAttribute("id", "socialNetworkNavigation")

// let ul= document.querySelector("ul")
// let listitem = document.createElement("li")
// let text= document.createTextNode("logout")
// listitem.appendChild(text)
// ul.appendChild(listitem)

// let retrieve = ul.firstElementChild
// let retrieve2 = ul.lastChild
// console.log(retrieve)
// console.log(retrieve2)

// let test = retrieve.firstElementChild
// console.log(test.innerHTML)



// Exercise 2 : Users
// <html>
// <body>
//   <div id="container">Users:</div>
//   <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
//   </ul>
//   <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
//   </ul>
// </body>
// </html>
// Change the name “Pete” by “Richard”
// Change each first name of the <ul> by your name
// Add at the end of each <ul>, a <li> that says “Hey students”
// Delete the <li> Sarah
// Bonus
// Add a class “student_list” to both of the <ul>
// Add the class “university” and “attendance” to the first <ul>


// Solution :


// let ul2 = document.querySelector("ul")
// console.log(ul2)
// ul2.lastElementChild.innerHTML = "richard";
// let ul3 = document.querySelectorAll("ul")[1]
// console.log(ul3);
// ul2.firstElementChild.innerHTML = "Tali";
// ul3.firstElementChild.innerHTML = "Lea";

// let newitem = document.createElement("li")
// let hey = document.createTextNode("Hey students")
// newitem.appendChild(hey)
// ul2.appendChild(newitem)
// let newitem2 = document.createElement("li")
// let heyo = document.createTextNode("Hey students")
// newitem2.appendChild(heyo)
// ul3.appendChild(newitem2)

// let sarah = ul3.child[1]
// sarah.remove();

// ul2.classList.add("student_list");
// ul3.classList.add("student_list");


// ul2.classList.add("university");
// ul2.classList.add("attendance");



// Exercise 3 : Change The Logo
// Open up Github in Chrome or Firefox, and open up the console.
// Find the Github navbar and store it in a variable. Use the DOM properties and methods to retrieve the element node. Don’t add an id or a class the the element.
// Change the color of the navbar.
// Find your Github name and store it in a variable.

// Solution :

// let navbar = document.querySelector(".Header")
// navbar.style.backgroundColor = "yellow"

// let name= document.querySelector("css-truncate-target")
// name2.innerText = "The boss"



// Exercise 4 : Users And Style
// <html>
// <body>
//   <div>Users:</div>
//   <ul>
//     <li>John</li>
//     <li>Pete</li>
//   </ul>
// </body>
// </html>
// For the following exercise use this website for assistance:
// 1. Add a “light blue” background color and some padding to the div above.
// 2. Do not display the first name (John) in the list and add a border to the second name (Pete).
// 3. Change the font size of the whole body.
// 4. Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div)


// Solution :

// let div = document.querySelector("div")
// div.style.backgroundColor = "lightblue"
// div.style.padding = "2em"

// let ul = document.querySelector("ul")
// let john = ul.firstElementChild
// ul.removeChild(john)

// let pete = ul.firstElementChild
// pete.style.border = "dashed red 2px"

// let body = document.querySelector("body")
// body.style.fontSize = "60px"

// let pete2 = ul.firstElementChild
// let x = john.innerText
// let y = pete.innerText

// if (div.style.backgroundColor = "lightblue"){
// alert("Hellooooo" + " "+ x + " " + "and" + " " + y)
// }




// Exercise 1
// <html>
// <body>
//   <div>Users:</div>
//   <ul>
//     <li>John</li>
//     <li>Pete</li>
//   </ul>
// </body>
// </html>
// For each of the questions, find 2 WAYS of accessing :

// 1. The div DOM node?

// 2. The ul DOM node?

// 3. The second li (with Pete)?

//  Solution :



// // 1. The div DOM node?
//  var div= document.getElementsByTagName("div");
//  console.log(div[0])

// var div1= document.querySelector("div")
//  console.log(div1)


// // 2. The ul DOM node?
//  var body= document;querySelector("body")
//  var unorder3= body.children[1]

// console.log(unorder3)


// // 3. The second li (with Pete)?
// var name= document;querySelector("ul")
// var name1= name.lastelementchild;

// console.log(ul)