// Daily Challenge : Not Bad
// Create a string that has the word “not” and “bad” inside
// Create another variable that should find the first appearance of the substring “not” and “bad”.
// If the ‘bad’ follows the “not”, then it should replace the whole “not”…”bad” substring with ‘good’ than console.log the result.
// If it doesn’t find “not” and “bad” in the right sequence (or at all), just console.log the original sentence.
// Example:

//   Your string is : 'This dinner is not that bad!', the result is : 'This dinner is good!'
//   Your string is : 'This movie is not so bad!' the result is : 'This movie is good!'
//   Your string is : 'This dinner is bad!' the result is : 'This dinner is bad!'



let sentence = prompt("This is not that bad at all")
let words = sentence.split(" ")
console.log(words)

let not = words.indewOf("not")
let bad = words.indexOf("bad")
let n = bad - not

if (not < bad){
words.splice(not, n+1, "good")
console.log(words.join(" "))
}
else
console.log(sentence)

console.log("not is located at "+ not +"position, and BAD is located at "+bad+ "position of this sentence")