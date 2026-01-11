// Question: How to check wheter the number is an integer or not?

var a = 2
console.log(Number.isInteger(a))

function Check(val){
    if(val%1 !== 0){
        return false
    }
    return true 
}

console.log(Check(a))