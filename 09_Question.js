// Question:- Write a function that returns a string in alphabetical order.

function order(str){
    return str.toLowerCase().split("").sort().join("")
}

var string = "Sarthak"
console.log(order(string))
