// Question:- Write a function that checks the given string is  palindrome or not 


function ispalindron(str){
    var reversed = str.split("").reverse().join("")
    return reversed === str
}

var string = "level"
console.log(ispalindron(string));

