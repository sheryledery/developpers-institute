
function hangman(){
    var theword = prompt("give me the word") // player guesses word
    theword = theword.toLowerCase() // forces lowercase to avoid errors
    var wordstar = [] // hides the word
    var try10 = 10 // 10 tries
    var find = false // boolean to set incorrect guess
    var wrongletters = [] // store incorrectly guessed letters
    var remainletters = theword.length 

    //convert word to stars
    for(var i=0; i < theword.length; i++){ // loop to convert characters to stars
        wordstar[i]="*"; // iterate stars
    }
console.log(wordstar)

 // loop while for when guessed letters are more than 0
 while(remainletters > 0) {
     var letterguess = prompt("give me a letter") // asks user to guess a letter
     find == false // incorrect guess

     if(try10 < 1){
         alert("GAME OVER") // out of guesses
         break; // stop loops
     } else if(letterguess == null){ // anti-but to make sure they pick a letter
         break;
     } else if(letterguess.length !== 1){ // prevents user from picking more than 1
     console.log("1 letter only !!") // response if more than one letter is chosen

     }else if(wrongletters.includes(letterguess)== true || wordstar.includes(letterguess)== true){ // to check if the user inputs
        console.log("You already guessed that letter ! Remaining guesses", try10)
        find == false // incorrect gues
    }else if(theword.includes(letterguess)== false && wordstar.includes(letterguess)== false){
        try10 = try10 - 1 // substracts remaining guesses
        find== false
        wrongletters.push(letterguess) // stores incorrect guess
        console.log("wrong letter. Try Again ! Remaining guesses", try10)
        console.log("Previous guesses", wrongletters)
    } else{ // correct guess
        for(var j= 0; j < theword.length; j++){
            if (theword[j]===letterguess){ // j finds the position of each letter in theword
                wordstar[j]= letterguess // unhides correct guess (star to letter)
                remainletters =  remainletters -1
                find= true
                console.log(wordstar) // to output correct guess letter instead of stars
            } 
        }
        if(find == false){
            try10= try10 - 1 // checks if find is still false and decreases a remaining guess
        }
}
}
if(remainletters == 0){
    find == false
    console.log("CONGRATULATIONS ! YOU WIN !")
}
}
hangman()
