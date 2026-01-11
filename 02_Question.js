// Question: Write a function that reverse the sentence.

var str = "this is the example"

function reverseSentence(string){
    return string.split(" ").map((word)=>{
        return word.split("").reverse().join("")
    }).join(" ")
}

console.log(reverseSentence(str))

