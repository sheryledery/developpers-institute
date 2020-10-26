// Exercise 1 : The World Translator
// Hint: Use Switch Case

// Ask the user which language he speaks.
// Create a few conditions :
// If he speaks French : display “Bonjour”
// If he speaks English : display “Hello”
// If he speaks Hebrew : display “Shalom”
// If he doesn’t speak none of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’

let language = prompt ("what language do you speak ?");
switch(language) {
    case "French":
        console.log('Bonjour !');
        break;  
    case "English":
            console.log('Hello !');
        break;
    case "Hebrew":
                console.log('Shalom !');
        break;
           
    default: console.log('01110011 01101111 01110010 01110010 01111001');
}

