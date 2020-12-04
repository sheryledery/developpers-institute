// Exercise 1
// Write a JavaScript function to add rows to a table. Use the code below as a base

// <html>
// <body> 

// <table id="sampleTable" border="1"> 
// <tr>
//     <td>Row1 cell1</td> 
//     <td>Row1 cell2</td>
// </tr> 
// <tr>
//     <td>Row2 cell1</td> 
//     <td>Row2 cell2</td>
// </tr> 
// </table>

// <input type="button" onclick="insert_Row()" value="Insert row">  
// </body>
// </html>

// Solution : 

// function insert_Row(){
//    let table = document.getElementById('sampleTable');

//    let newrow = document.createElement('tr');

//    newrow.innerHTML = '<td>Row cell</td><td>Rowcell</td>';

//    table.appendChild(newrow);
// }



// Exercise 2
// Add a few event listener to the button. The event listeners should change the style of the button

// <button id="jsstyle">Style</button> 

// Solution :

// let btn = document.getElementById('jsstyle');

//  btn.addEventListener('click', function(){
//     btn.style.backgroundColor = 'green';
//     btn.style.fontSize = '4em';

// })

// btn.addEventListener('click', pushbtn);
// function pushbtn(){

//     btn.innerHTML = 'MAGIC';
//     let newdiv = document.createElement('div');
//     newdiv.style.backgroundColor = 'blue';
//     newdiv.style.backgroundImage = 'url (https://www.google.com/search?q=magic&sxsrf=ALeKk00eI-lYshwGX8CiMy4PXhwOO6yOHg:1604311327468&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiVlKG2zePsAhV8SBUIHSTTAF0Q_AUoAXoECAYQAw&biw=740&bih=743#imgrc=G4NKR1dM92vw4M)'
//     newdiv.style.width = '300px';
//     newdiv.style.height = '150px';
//     newdiv.style.backgroundSize = 'cover';

//     document.body.insertBefore(newdiv, btn);
// }

// document.addEventListener('keypress', hello);
// function hello(){
//     let circle = document.createElement('div');

//     circle.style.backgroundColor = 'pink';
//     circle.style.borderRadius = '50%';
//     circle.innerHTML = 'DANGER ZONE';
//     circle.style.color = 'white';
//     circle.style.width = '300px';
//     circle.style.height = '150px';
//     circle.style.textAlign = 'center';
    

//     document.body.insertBefore(circle, btn);
// }


// Exercise 1 xp : Change The Article
// <article>
//     <h1> Some Facts </h1>
//     <h2> The Chocolate </h2>
//     <p> Chocolate is made from tropical Theobroma cacao tree seeds. 
//     Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
//     <p> After the European discovery of the Americas, chocolate became 
//     very popular in the wider world, and its demand exploded. </p>
//     <p> Chocolate has since become a popular food product that millions enjoy every day, 
//     thanks to its unique, rich, and sweet taste.</p> 
//     <p> But what effect does eating chocolate have on our health?</p> 
// </article>
// <form>
//     <label>What is your name?</label><input type="text" name="userName">
//     <label>What did you think of the article?</label><input type="text" name="questionToUser">
// </form>
// Give to all paragraphs inside the <article> tag the class of para_article.
// Remove the last paragraph in the article.
// Add an event listener so that when you click on the h2, it is removed from the DOM.
// Set the font size of the h1 to be a random pixel size from 0 to 100.
// Hide the 1st paragraph, when it’s clicked. (use the display property )
// Get the values from the inputs and append them to the end of the html, inside a table.
// Bonus: Fade out the 2nd paragraph over 2000 milliseconds, when it’s clicked.

// Solution :


// let para = document.getElementsByTagName("p")
// let article = document.querySelector("article")
// console.log(para)

// for (var i= 0; i < para.length; i++ ){
//     para[i].setAttribute('class', 'para_article')
// }

// article.removeChild(para[3])

// let h2 = document.querySelector("h2")

// h2.addEventListener("click", function(){
//     h2.remove()
// })

// let h1= document.querySelector("h1")
// h1.style.fontSize = Math.floor(Math.random()* 101)+ "px";

// para[0].addEventListener("click", function(){
//     para[0].style.display = "none"
// })

// para[1].addEventListener("click", function(){
//     para[1].style.opacity = "0,2"
//     para[1].style.transitionDuration = "2000ms"
// })

// let form = document.querySelector("form")

// let input = document.querySelectorAll("input")[0]
// let input2 = document.querySelectorAll("input")[1]

// var x = document.createElement("INPUT");
// x.setAttribute("type", "submit");
// x.setAttribute("class", "formvalue");
// form.appendChild(x);

// x.addEventListener("click", function(){
//     event.preventDefault();
//     let value = input.value
//     let value2 = input.value
//     let div = document.createElement("div")
//     div.setAttribute("class", "tbl")
//     div.innerHTML = "<table border = '1'>" + "<tr>" + "<th>Name</th>" + "<th>Answer</th>" + "</tr>" + 
//     "<tr>" + "<td>" + value + "</td>" + "<td>" + value + "</td>" + "</tr>"
//     document.body.appendChild(div)
// })


// Exercise 2 xp : Transform The Sentence
// Add this sentence to your html then follow the steps :
// <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
// <strong>end</strong> you <strong>will</strong> be great Developers!
// <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>
// Create a function called : getBold_items() that takes no parameter. This function has to collect all the bold items inside the paragraph.
// Create a function called : highlight() that changes the color of each bold item to blue.
// Create a function called : return_normal() that changes the color of each bold item to black.
// Call the function highlight() onMouseOver and the function return_normal() onMouseOut

// Solution :

let para_new = document.querySelector("p") // selectioner l'élément sur lequel on veut appliquer la fonction
let bold; // définir la variable sur laquel on va travailler en dehors(global) pour pouvoir la réutiliser dans le code

function getBold_items(){ // créer une fonction pour collecter tous les élements en gras
    bold = para_new.querySelectorAll("strong") // réutiliser la varaible bold, défini précédemment, et sélectioner tous les élements gras de notre html 
}
getBold_items() // appeler la fonction

function highlight(){ // créer une fonction pour changer les élements gras en bleu
    for (var i=0; i < bold.length; i++){ // créer une boucle pour définir jusqu'où on applique la fonction
        bold[i].style.color ="blue" // appliquer la couleur bleu aux élements en gras, lorque la boucle tourne
    }
}


function return_normal(){ // créer une fonction pour changer les élements gras en noir
    for (var i=0; i< bold.length; i++){ // créer une boucle pour définir jusqu'où on applique la fonction
        bold[i].style.color = "black" // appliquer la couleur noir aux élements en gras, lorque la boucle tourne
    }
}

para_new.addEventListener("mouseover", highlight); // créer un évenement sur le paragraphe à l'aide de "addeventlistener" et lui appliquer une propriété qui est ici "mouseover" et ensuite appeler la fonction
para_new.addEventListener("mouseout", return_normal); // same


// Exercice 3 : Volume Of A Sphere
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:
// <!doctype html> 
// <html lang="en"> 
//     <head> 
//         <meta charset="utf-8"> 
//         <title>Volume of a Sphere</title> 
//         <style>  
//             body{padding-top:30px;} 
//             label,input{display:block;}  
//         </style> 
//     </head> 
//     <body> 
//         <p>Input radius value and get the volume of a sphere.</p> 
//         <form  id="MyForm"> 
//             <label for="radius">Radius</label><input type="text" name="radius" id="radius" required> 
//             <label for="volume">Volume</label><input type="text" name="volume" id="volume"> 
//             <input type="submit" value="Calculate" id="submit">    
//         </form> 
//     </body> 
// </html>

// Solution :

// function calculation(){
//    event.preventDefault() // stops submit from refreshing page
//     let radius = document.getElementById("radius").value;
//     radius = Math.abs(radius); // making number absolute
//     let volume = document.getElementById("volume").value;
//      volume = (4/3) * Math.PI * Math.pow(radius, 3);
//     volume = volume.toFixed(2) // up to 2 decimal points
//     let please = document.getElementById("volume") // selects input of volume
//     please.setAttribute("value", volume) // sets the value of attribute
   
// }

// let submit = document.getElementById("submit")
// submit.addEventListener("click", calculation)
