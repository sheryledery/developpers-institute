

 function  starWords(){
     let getsentence = prompt("What do you like most -separate by coma");
     let splitw = getsentence.split(' , ') // .join('\r\n');
     let border = "*".repeat(getsentence.length)
     console.log(border)
     for(let word of getsentence ){
         console.log("*", " ", word, " ".repeat(getsentence.length - word.length - 3), "*")
     }
     console.log(border)
 }
 starWords()