// Daily Challenge : Planets
// This webpage is just a blank universe, and you’ll fill it with planets and moons in this challenge.
// You only have to work with a JS file

// Create an array of planets of the solar system
// For each planet, in the array, create a div using createElement. This div should have a class named ‘planet’.
// Each planet should have a different background color. (Hint: add a new class to each planet)
// Finally append each div to the body.
// Bonus Do the same process for moons. Be careful, each planet has a certain amount of moons; How should you display them ?
// <!DOCTYPE html>
// <html>
//     <head>
//         <meta charset="utf-8">
//         <title>Challenge: Create a solar system</title>
//         <style>
//             body {
//                 background-color: black;
//                 padding: 10px;
//             }
//             .planet {
//                 width: 100px;
//                 height: 100px;
//                 border-radius: 50%;
//                 text-align: center;
//                 padding: 10px;
//                 position: relative;
//             }
//             .moon {
//                 position: absolute;
//                 width: 30px;
//                 height: 30px;
//                 border-radius: 50%;
//                 background: rgb(237, 237, 237);
//             }
//         </style>
//     </head>
//     <body>


//     <script>

//     </script>
//     </body>
// </html>





let solar = document.querySelector("body");
let planets = ["Mercure", "Venus", "Earth", "Mars", "Jupiter", "Saturne", "Uranus", "Neptune"]

let div = document.createElement("div")
console.log(div)

for(var i=0; i< planets.length; i++){
    var newdiv = document.createElement("div") // creating a div
    newdiv.innerHTML= planets[i] // each planet will have a div
    div.appendChild(newdiv) // putting the new div inside parent's div
    newdiv.setAttribute("class", "planet") // setting a class to each div
}
if (newdiv.innerText== "Earth"){
    newdiv.style.backgroundColor= "blue"
} else if (newdiv.innerText == "Jupiter"){
    newdiv.backgroundColor= "orange"
}else if (newdiv.innerText == "Mercure"){
    newdiv.backgroundColor= "red"
}else if (newdiv.innerText == "Venus"){
    newdiv.backgroundColor= "pink"
}else if (newdiv.innerText == "Mars"){
    newdiv.backgroundColor= "green"
}else if (newdiv.innerText == "Saturne"){
    newdiv.backgroundColor= "lightblue"
}else if (newdiv.innerText == "Uranus"){
    newdiv.backgroundColor= "orange"
}else if (newdiv.innerText == "Neptune"){
    newdiv.backgroundColor= "brown"
}

solar.appendChild(div)