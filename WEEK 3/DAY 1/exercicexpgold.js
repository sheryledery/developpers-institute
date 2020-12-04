// Exercise 1 : My Book List
// Look at this link to help you : here
// The point of this challenge is to display a list of two books on the page.
// You only have to write code in a js file. It has to be dynamic.
// The body of your html page has to be empty.

// Create an array called allBooks. This array contain objects. Each object is a book that has 4 keys : title, author,image(a url) and alreadyRead which is a boolean.
// Initiate the array with 2 books of your choice.
// Requirements:
// On the page you have to render the books inside a table.
// For each book :
// You have to display the book’s title then “written by” and then the book’s author (Ex: HarryPotter written by JKRolling)
// The width of the image has to be set to 100.
// If the book is already read. Set the color of the book details to red


// Solution :

let table= document.body.firstElementChild;
var allBooks = [
    {
        title: "Mistborn",
        author: "Brandon Sanderson",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.fr%2FMistborn-Brandon-Sanderson%2Fdp%2F0765350386&psig=AOvVaw2CouWvyo7lLr1IOXgxJIkv&ust=1604324673817000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDMj6i94ewCFQAAAAAdAAAAABAD",
        already_Read: true
    },{
        title: "IT",
        author: "Stephen King",
        image: "https://www.google.com/search?q=IT+stephen+king+book+image&tbm=isch&ved=2ahUKEwj98YC7veHsAhUZ76QKHd5CALUQ2-cCegQIABAA&oq=IT+stephen+king+book+image&gs_lcp=CgNpbWcQAzoECCMQJzoECAAQE1CXFFjLL2CXNGgAcAB4AIAB-wKIAdQJkgEHMC4xLjMuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=8rueX_2wO5nekwXehYGoCw#imgrc=rA7-bGY0t0OCFM",
        already_Read: false
    
    }
]

var div = document.createElement("div") // create div element
div.setAttribute("id", "tbl") // make attributes
div.style.marginTop= "50px" // margin for spacing
document.body.appendChild(div) // attaches div element to the body
document.getElementById("tbl").innerHTML= "<table border = '1'>"
'<thead>' + "<tr>" + "<th>title</th>" + "<th>author</th>" + "<th>image</th>" + "<th>already_read</th>" +
"</tr" + "</thead" + "<tbody>" + "</body>"


var table_body = document.querySelector("tbody")
var read = "";
var a = "<tbody>";

for(i = 0; i< allBooks.length; i++){
    let read= allBooks[i].already_Read;

    if(read=== true){
        isRead= "Yes";
    } else{
        isRead= "No";
    }
    a = a + "<tr>";
    a = a + "<td>" + allBooks[i].title + "</td>";
    a = a + "<td>" + allBooks[i].author + "</td>";
    a = a + "<td>" + '<img width = 100 src="'+allBooks[i].img+'">'+ allBooks[i].image + "</td>";
    a = a + "<td>" + isRead + "</td>";
    a = a + "</tr>";
}

a = a + "</body>"
tablebody.innerHTML = a;

let tableData = document.querySelectorAll("td");

for (j=0; j< tableData.length; j++){
    if(tableData[j].innerHTML==="Yes"){
        tableData[j].style.color = "red";
    }
}