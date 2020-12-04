// Exercise 1 : Select A Kind Of Music

// <select id="genres">
//   <option value="rock">Rock</option>
//   <option value="blues" selected>Blues</option>
// </select>
// Show the value and the text of the selected option.
// Add an option: <option value="classic">Classic</option>.
// Make it selected

// Solution :

let choice = document.querySelector("select");
console.log(choice)

let selectedop = choice.options[choice.selectedIndex].value;
console.log(selectedop)

let option = document.createElement("option")
option.setAttribute("value", "Classic")
option.innerHTML = "Classic"
choice.appendChild(option)

option.setAttribute("selected", "selected")

let blues = choice[1]

blues.removeAttribute("selected")