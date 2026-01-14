// Question:- Write a function that accepts a string as a parameter  and convert the first letter of each word of the string in upper case.


function capatalize(string){
    return string.split(" ").map(element => {
        return element.charAt(0).toUpperCase()+element.substring(1)
    }).join(" ")
}

var str = "this is the game"

console.log(capatalize(str))