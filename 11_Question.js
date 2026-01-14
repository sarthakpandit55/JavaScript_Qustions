// Question:- Write a function to get number of occurrences of each letter in specifired string


function count(str){
    var obj = {}
    str.split("").map(element => {
        if(obj.hasOwnProperty(element)===false){
            obj[element] = 1
        }
        else{
            obj[element]++
        }
    });
    return obj
}

let string = "apple is healthy"

console.log(count(string))